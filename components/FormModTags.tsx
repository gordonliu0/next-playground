"use client";

import React, { useState, useCallback } from 'react';
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { AppProps } from '@/components/FormModFields';

const FormModTags = ({ categoryIndex, moduleIndex, watch, control, register }: AppProps) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules.${moduleIndex}.tags`
  });

  return (
    <div className="flex flex-col gap-3">
      {fields.map((tagField, tagFieldIndex) => {
        return (
          <div key={tagField.id} className="flex flex-col gap-3 bg-transparent">
            <select {...register(`categories.${categoryIndex}.modules.${moduleIndex}.tags.${tagFieldIndex}.value`)} required className="bg-transparent invalid:text-slate-400">
              <option value="" disabled selected hidden >Select a grading...</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="urgent">Urgent</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
        );
      })}
    </div>
  );
}

export default FormModTags