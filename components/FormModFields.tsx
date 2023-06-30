"use client";

import React, { useEffect } from "react";
import { Control, UseFormRegister, useFieldArray, UseFormWatch, UseFormSetValue } from "react-hook-form";
import { FormData, ModFieldSelect, ModuleData, AppProps } from "./FormModule"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import * as SelectPrimitive from "@radix-ui/react-select"

export default function FormModFields({ categoryIndex, moduleIndex, watch, control, register, setValue }: AppProps) {
  const { fields, remove, append, } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules.${moduleIndex}.modFields`
  });

  useEffect(() => {
    watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${0}`)
  })

  if (watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags`).length !== 0) {
    const damageCondition = watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags.0.value`)
    if (damageCondition == "" || damageCondition == "good") {
      return;
    }
  }



  return (
    <div className="flex flex-col gap-3">
      {fields.map((modField, modFieldIndex) => {
        if (modField.modFieldType == "number") {
          return (
            <div key={modField.id} className="flex flex-col gap-1">
              <p className="text-sm font-medium whitespace-pre-line">{(watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`).toString() == 'healthScore') ? 'The roof health score on the left correlates to the estimated roof lifespan remaining on the right \n 91-100 → 10+ years \n 81-90 → 5-10 years \n 71-80 → 2-5 years \n 61-70 → 6-24 months \n < 60 → < 6 months' : watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</p>
              <Input
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
            <div key={modField.id} className="flex flex-col gap-1">
              <p className="text-sm font-medium whitespace-pre-line">{(watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`).toString() == 'healthScore') ? 'The roof health score on the left correlates to the estimated roof lifespan remaining on the right \n 91-100 → 10+ years \n 81-90 → 5-10 years \n 71-80 → 2-5 years \n 61-70 → 6-24 months \n < 60 → < 6 months' : watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</p>
              <Input
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
            <div key={modField.id} className="flex flex-col gap-1 whitespace-pre-line">
              <p className="text-sm font-medium whitespace-pre-line">{(watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`).toString() == 'healthScore') ? 'The roof health score on the left correlates to the estimated roof lifespan remaining on the right \n 91-100 → 10+ years \n 81-90 → 5-10 years \n 71-80 → 2-5 years \n 61-70 → 6-24 months \n < 60 → < 6 months' : watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldId`)}</p>
              <SelectPrimitive.Root
                defaultValue=""
                value={watch(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`) as string}
                onValueChange={(val) => {
                  console.log()
                  setValue(`categories.${categoryIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`, val)
                }}
              >
                <SelectTrigger
                  defaultValue=""
                >
                  <SelectValue placeholder="Select an option"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="" disabled>Select an option...</SelectItem>
                  {(modField as ModFieldSelect).modFieldSelectOptions.map((option, optionIndex) => {
                    return (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    )
                  })}
                </SelectContent>
              </SelectPrimitive.Root>
            </div>
          );
        }
      })}
    </div >
  );
};
