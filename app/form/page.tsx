"use client";

import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

type FormData = {
  categories: {
    categoryName: string;
    modules: {
      tags: string[];
      photos: File[];
      modFields: {
        modFieldId: string;
        modFieldValue: string | number;
      }[];
    }[];
  }[];
};

export default function Form() {
  const onSubmit = (data: FormData) => console.log(data);
  const { register, handleSubmit, watch, formState: { errors }, control, getValues, trigger } = useForm<FormData>({
    defaultValues: {
      categories: [
        {
          categoryName: "Core Inspections",
          modules: [
            {
              tags: ["Good"],
              photos: [],
              modFields: [
                {
                  modFieldId: "Affected area",
                  modFieldValue: "24 sq ft",
                },
              ],
            },
          ],
        },
      ],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: 'categories',
    control
  })

  const { insert: modInsert, append: modAppend } = useFieldArray({
    name: 'categories.0.modules',
    control
  })

  return (
    <div className="flex flex-col gap-6 my-6">
      <button onClick={() => {
        console.log(getValues())
      }}>
        Get Values
      </button>
      <button
        type="button"
        onClick={() => {
          append({
            categoryName: "Drains",
            modules: [
              {
                tags: ["Emergency"],
                photos: [],
                modFields: [
                  {
                    modFieldId: "Affected linear distance",
                    modFieldValue: "12 ft",
                  },
                ],
              },
            ],
          });
        }}
      >
        append
      </button>
      {fields.map((field: FormData['categories'][number], fieldIndex: number) => (<div key={field.id as any}>
        <h1>{field.categoryName}</h1>
        <div className="flex flex-col gap-2 my-2">
          {field.modules.map((module: FormData['categories'][number]['modules'][number], moduleIndex: number) => {
            return (<div
              className="photo-module flex flex-col gap-2 my-2"
              key={moduleIndex}
            >
              <Controller
                control={control}
                name={`categories.${fieldIndex}.modules.${moduleIndex}.tags`}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (<div className="flex flex-col gap-1 my-0">
                  <h3>Tags</h3>
                  <input
                    onBlur={onBlur} // notify when input is touched
                    onChange={onChange} // send value to hook form
                  />
                </div>
                )}
              />
              {module.modFields.map((modField: FormData['categories'][number]['modules'][number]['modFields'][number], modFieldIndex: number) => {
                return <Controller
                  control={control}
                  name={`categories.${fieldIndex}.modules.${moduleIndex}.modFields.${modFieldIndex}.modFieldValue`}
                  key={modField.modFieldId}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => {
                    return <div className="flex flex-col gap-1 my-0">
                      <h3>{modField.modFieldId}</h3>
                      <input
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                      />
                    </div>
                  }
                  }
                />
              })}
            </div>)
          })
          }
          <button type="button"
            onClick={
              (e: React.MouseEvent<HTMLButtonElement>) => {
                modAppend({
                  tags: ["Good"],
                  photos: [],
                  modFields: [
                    {
                      modFieldId: "Affected area",
                      modFieldValue: "24 sq ft",
                    },
                  ],
                })
                trigger()
              }
            }>Add Photo Group</button>
        </div>
      </div>))
      }
    </div >
  );
}
