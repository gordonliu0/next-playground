"use client";

import React, { useState, useCallback } from 'react';
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { AppProps } from '@/components/FormModule';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import * as SelectPrimitive from "@radix-ui/react-select"

const FormModTags = ({ categoryIndex, moduleIndex, watch, control, register, setValue }: AppProps) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules.${moduleIndex}.tags`
  });

  if (fields.length === 0) {
    return
  }
  // {...register(`categories.${categoryIndex}.modules.${moduleIndex}.tags.${tagFieldIndex}.value`)}
  return (
    <div className="flex flex-col gap-3">
      {fields.map((tagField, tagFieldIndex) => {
        return (
          <div key={tagField.id} className="flex flex-col gap-1 bg-transparent">
            <h1 className="text-sm font-medium">Grading</h1>
            <SelectPrimitive.Root
              required
              value={watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags.${tagFieldIndex}.value`)}
              onValueChange={(val) => {
                setValue(`categories.${categoryIndex}.modules.${moduleIndex}.tags.${tagFieldIndex}.value`, val)
              }}
            >
              <SelectTrigger
                defaultValue=""
              >
                <SelectValue placeholder="Select a grading..."></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="" hidden disabled>Select a grading...</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
                <SelectItem value="emergency">Emergency</SelectItem>
              </SelectContent>
            </SelectPrimitive.Root>
          </div>
        );
      })}
    </div>
  );
}

export default FormModTags