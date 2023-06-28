"use client";

import React from "react";
import { Control, UseFormRegister, useFieldArray, UseFormWatch } from "react-hook-form";
import { FormData, ModFieldSelect, ModuleData } from "./FormModule"

export declare interface AppProps {
  children?: React.ReactNode; // best, accepts everything React can render
  categoryIndex: number; // A single React element
  moduleIndex: number; // A single React element
  watch: UseFormWatch<FormData>;
  control: Control<FormData, any>; // to pass through style props
  register: UseFormRegister<FormData>;
}

export default function FormModFields({ categoryIndex, moduleIndex, watch, control, register }: AppProps) {
  const { fields, remove, append, } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules.${moduleIndex}.modFields`
  });

  return (
    <div className="flex flex-col gap-3">
      {fields.map((modField, modFieldIndex) => {
        if (watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags`).length !== 0) {
          const damageCondition = watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags.0.value`)
          if (damageCondition == "" || damageCondition == "good") {
            return;
          }
        }

        if (modField.modFieldType == "number") {
          return (
            <div key={modField.id} className="flex flex-col gap-3">
              <h1>{watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</h1>
              <input
                {...register(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`, {
                  required: true,
                  valueAsNumber: true,
                })}
                placeholder="Enter a number..."
                type="number"
              />
            </div>
          );
        }
        else if (modField.modFieldType == "string") {
          return (
            <div key={modField.id} className="flex flex-col gap-3">
              <h1>{watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</h1>
              <input
                {...register(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`, {
                  required: true,
                })}
                placeholder="Enter some text..."
                type="string"
              />
            </div>
          );
        }
        else if (modField.modFieldType == "select") {
          return (
            <div key={modField.id} className="flex flex-col gap-3 bg-transparent">
              <h1>{watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</h1>
              <select
                {...register(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`)}
                required
                className="bg-transparent invalid:text-slate-400"
              >
                <option value="" disabled selected hidden >Select an option...</option>
                {(modField as ModFieldSelect).modFieldSelectOptions.map((option, optionIndex) => {
                  return (
                    <option key={optionIndex} value={option} className="bg-transparent">{option}</option>
                  )
                })}
              </select>
            </div>
          );
        }


      })}
    </div >
  );
  // return (
  //   <div className="flex flex-col gap-3">
  //     {fields.map((modField, modFieldIndex) => {
  //       return (
  //         <div key={modField.id} className="flex flex-col gap-3 py-3">
  //           <div className="flex flex-row gap-3">
  //             <label>Module Field {modFieldIndex + 1}</label>
  //             <button disabled={modFieldIndex == 0} type="button" className={(modFieldIndex == 0 ? "bg-gray-300 text-white py-1 px-2 rounded-full focus:outline-none" : "bg-rose-500 hover:bg-rose-700 text-white py-1 px-2 rounded-full")} onClick={() => remove(modFieldIndex)}>
  //               Delete Field
  //             </button>
  //           </div>

  //           <input
  //             {...register(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}
  //             defaultValue={"Area Affected"}
  //           />
  //           <input
  //             {...register(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`)}
  //             defaultValue={"10sqft"}
  //           />

  //         </div>
  //       );
  //     })}

  //     <button
  //       type="button"
  //       onClick={() =>
  //         append({
  //           modFieldId: "Affected area",
  //           modFieldValue: "24 sq ft",
  //         })
  //       }
  //     >
  //       Add field
  //     </button>

  //     <hr />
  //   </div >
  // );
};
