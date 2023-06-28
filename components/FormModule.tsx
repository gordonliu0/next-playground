"use client";

import React, { useEffect, useRef } from "react";
import { Control, UseFormRegister, UseFormWatch, useWatch, useFieldArray, UseFormSetValue } from "react-hook-form";
import FormModFields from "./FormModFields"
import FormModPhotos from "./FormModPhotos"
import FormModTags from "./FormModTags"
import { PlusCircle, Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export type FormData = {
  categories: {
    categoryName: string;
    categoryDescription: string;
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
  setValue: UseFormSetValue<FormData>;
}

export declare interface AppPropsExtended extends AppProps {
  canAddModules: Boolean;
  canDeleteModules: Boolean;
}

export default function FormModule({ canAddModules, canDeleteModules, categoryIndex, moduleIndex, watch, control, register, setValue }: AppPropsExtended) {
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
    <div className="w-full flex flex-col gap-3">
      {fields.map((item, moduleIndex) => {
        if (item.hasPhotos === false) {
          return (
            <div key={item.id} className="flex flex-col gap-6 p-6 border rounded-2xl">
              <FormModFields categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} setValue={setValue} key={"formModFields" + "category" + categoryIndex + "module" + (moduleIndex)} />
            </div>
          )
        }
        return (
          <div key={item.id} className="flex flex-col gap-6 p-6 border rounded-2xl">
            {item.modName && <label>{item.modName}</label>}
            <FormModTags categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} setValue={setValue} key={"formModTags" + "category" + categoryIndex + "module" + moduleIndex} />
            <FormModPhotos categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} setValue={setValue} key={"formModPhotos" + "category" + categoryIndex + "module" + moduleIndex} />
            <FormModFields categoryIndex={categoryIndex} moduleIndex={moduleIndex} watch={watch} control={control} register={register} setValue={setValue} key={"formModFields" + "category" + categoryIndex + "module" + moduleIndex} />
            {((moduleIndex !== 0) && (canDeleteModules)) &&
              <div className="flex flex-row items-center justify-end">
                <button
                  type="button"
                  className="flex flex-row gap-2 text-sm text-red-500 stroke-red-500 hover:text-red-700 hover:stroke-red-700 transition"
                  onClick={() =>
                    remove(moduleIndex)
                  }
                >
                  <Trash2 size={18} />
                  Delete this group
                </button>
              </div>
            }
          </div>
        );
      })}

      {canAddModules &&
        <button
          type="button"
          className="px-2 py-1"
          onClick={() =>
            append(defaultValue.current)
          }
        >
          <div className="flex flex-row gap-2 items-center justify-start text-sm text-muted-foreground hover:text-secondary-foreground transition">
            <PlusCircle size={18} />
            Add another group
          </div>
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
