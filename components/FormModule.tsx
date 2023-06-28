"use client";

import React, { useEffect, useRef } from "react";
import { Control, UseFormRegister, UseFormWatch, useWatch, useFieldArray } from "react-hook-form";
import FormModFields from "./FormModFields"
import FormModPhotos from "./FormModPhotos"
import FormModTags from "./FormModTags"

export type FormData = {
  categories: {
    categoryName: string;
    canAddModules: Boolean;
    canDeleteModules: Boolean;
    modules: ModuleData[];
  }[];
};

export type ModuleData = {
  modName: string;
  tags: {
    value: string;
  }[];
  hasPhotos: boolean;
  photos: {
    photo: File;
  }[];
  modFields: (ModFieldString | ModFieldSelect)[];
}

export interface ModFieldString {
  modFieldType: string;
  modFieldId: string;
  modFieldValue: string;
}

export interface ModFieldSelect {
  modFieldType: string;
  modFieldId: string;
  modFieldValue: number;
  modFieldSelectOptions: string[];
}

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  watch: UseFormWatch<FormData>;
  categoryIndex: number; // A single React element
  moduleIndex: number;
  control: Control<FormData, any>; // to pass through style props
  register: UseFormRegister<FormData>;
}

export declare interface AppPropsExtended extends AppProps {
  canAddModules: Boolean;
  canDeleteModules: Boolean;
}

export default function FormModule({ canAddModules, canDeleteModules, categoryIndex, moduleIndex, watch, control, register }: AppPropsExtended) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules`
  });
  const defaultWatch = useWatch({ control: control, name: `categories.${categoryIndex}.modules.${moduleIndex}` })
  const defaultValue = useRef(defaultWatch)

  if (fields.length == 0) {
    return;
  }
  return (
    <div className="w-full flex flex-col gap-6">
      {fields.map((item, moduleIndex) => {
        if (item.hasPhotos == false) {
          return (
            <FormModFields categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModFields" + "category" + categoryIndex + "module" + (moduleIndex)} />
          )
        }
        return (
          <div key={item.id} className="flex flex-col gap-3 p-3 border rounded-md border-black">
            <label>{item.modName ?? "Group " + (moduleIndex + 1)}</label>
            <FormModTags categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModTags" + "category" + categoryIndex + "module" + moduleIndex} />
            <FormModPhotos categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModPhotos" + "category" + categoryIndex + "module" + moduleIndex} />
            <FormModFields categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModFields" + "category" + categoryIndex + "module" + moduleIndex} />
            {((moduleIndex !== 0) && (canDeleteModules)) &&
              <button type="button" className={"text-rose-500 py-1 px-2 rounded-full"} onClick={() => remove(moduleIndex)}>
                Delete Group
              </button>
            }
          </div>
        );
      })}

      {canAddModules &&
        <button
          type="button"
          className="rounded-lg border border-black px-2 py-1 bg-slate-200"
          onClick={() =>
            append(defaultValue.current)
          }
        >
          Add group
        </button>
      }
    </div >
  );
  // return (
  //   <div className="w-full flex flex-col gap-6">
  //     {fields.map((item, moduleIndex) => {
  //       return (
  //         <div key={item.id} className="flex flex-col gap-3 p-3 border rounded-md border-black">
  //           <label>Photo Group {moduleIndex + 1}</label>
  //           <input
  //             {...register(`categories.${moduleIndex}.modules.${moduleIndex}.tags.0.value`, {
  //               required: true
  //             })}
  //             defaultValue={"Good"}
  //             style={{ marginRight: "25px" }}
  //           />
  //           <FormModFields categoryIndex={moduleIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModuleFields" + moduleIndex} />
  //           <FormModPhotos categoryIndex={moduleIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} key={"formModulePhotosFields" + moduleIndex} />
  //           <button disabled={moduleIndex == 0} type="button" className={(moduleIndex == 0 ? "bg-gray-300 text-white py-1 px-2 rounded-full focus:outline-none" : "bg-rose-500 hover:bg-rose-700 text-white py-1 px-2 rounded-full")} onClick={() => remove(moduleIndex)}>
  //             Delete Photo Group
  //           </button>
  //         </div>
  //       );
  //     })}

  //     <button
  //       type="button"
  //       className="rounded-lg border border-black px-2 py-1"
  //       onClick={() =>
  //         append({
  //           tags: [],
  //           photos: [],
  //           modFields: [
  //             {
  //               modFieldId: "",
  //               modFieldValue: "",
  //             },
  //           ],
  //         })
  //       }
  //     >
  //       Add photo group
  //     </button>
  //   </div >
  // );
};
