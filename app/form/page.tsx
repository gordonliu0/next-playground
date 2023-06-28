"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import FormModule, { FormData } from "@/components/FormModule"
import { DevTool } from "@hookform/devtools";

export default function Form() {
  const onSubmit = (data: FormData) => console.log(data);
  const { register, handleSubmit, watch, formState: { errors }, control, getValues, trigger } = useForm<FormData>({
    defaultValues: {
      categories: [
        {
          categoryName: "Core Inspections",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "string",
                  modFieldId: "Roof Composition",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Decking Condition",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Seam Condition",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Linear Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Membrane Attachment",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Impacts or Tears",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Pitch Pans",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Quantity Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Curb Condition",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Linear Feet Needing Repair",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Drain Condition",
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Drain Repair Options",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Reflash Drain", "Retrofit Drain"],
                },
                {
                  modFieldType: "number",
                  modFieldId: "Retrofit Diameter Entry (if applicable)",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Scuppers",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Scupper Repair Options",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Reflash Scupper", "Replace Scupper"],
                },
                {
                  modFieldType: "number",
                  modFieldId: "Width",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Height",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Depth",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Coping",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Linear Feet",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Coping Inner Leg Measurement",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Coping Top Leg Measurement",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Coping Outer Leg Measurement",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Membrane Perimeter",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Linear Feet Needing Repair",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Wall Flashings",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Other Considerations",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "string",
                  modFieldId: "Notes",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Property Type",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Selection",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Office", "Retail", "Hotel", "Industrial", "Multifamily"],
                },
              ],
            },
          ],
        },

        {
          categoryName: "Code Compliance Checklist Reviewed",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Selection",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Yes", "No"],
                },
              ],
            },
          ],
        },

        {
          categoryName: "Drone Inspection",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
              ],
            },
          ],
        },

        {
          categoryName: "Drone Building Overview",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              modName: "Front Building Overview",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
            {
              modName: "Back Building Overview",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
            {
              modName: "Left Building Overview",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
            {
              modName: "Right Building Overview",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
            {
              modName: "Bird Building Overview",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
          ],
        },

        {
          categoryName: "Previous Repairs",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "string",
                  modFieldId: "Previous Repairs Recommendations",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Rooftop Mechanical",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "string",
                  modFieldId: "Rooftop Mechanical Recommendations",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Gutters Conditions",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Linear Feet Affected",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Width",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Length",
                  modFieldValue: undefined,
                },
                {
                  modFieldType: "number",
                  modFieldId: "Height",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Areas of Ponding",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" }
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Roof Membrane Condition",
          canAddModules: true,
          canDeleteModules: true,
          modules: [
            {
              tags: [
                { value: "" },
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Storm Damage",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Hail Damaged", "Wind Damaged", "None"],
                },
                {
                  modFieldType: "number",
                  modFieldId: "Square Feet Affected",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "10x10 Test Square",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              modName: "If roof membrane is damaged, please provide photos for a 10x10 test square here.",
              tags: [
              ],
              hasPhotos: true,
              photos: [
              ],
              modFields: [
              ],
            },
          ],
        },

        {
          categoryName: "Property Inspection Results",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
              ],
            },
          ],
        },

        {
          categoryName: "Total Damage Impacts",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Dollars",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Roof Health Score",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "number",
                  modFieldId: "Please enter a score from 0-100",
                  modFieldValue: undefined,
                },
              ],
            },
          ],
        },

        {
          categoryName: "Recommended Property Action",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Selection",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Healthy", "Vulnerable", "Roof Repair Needed", "Roof Replacement Needed"],
                },
              ],
            },
          ],
        },

        {
          categoryName: "Insurance Claim Eligible",
          canAddModules: false,
          canDeleteModules: false,
          modules: [
            {
              tags: [
              ],
              hasPhotos: false,
              photos: [
              ],
              modFields: [
                {
                  modFieldType: "select",
                  modFieldId: "Selection",
                  modFieldValue: undefined,
                  modFieldSelectOptions: ["Eligible", "Ineligible"],
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

  return (<div className="w-full">
    <button onClick={() => { console.log(getValues()) }}>
      Get Values
    </button>
    <div className="flex flex-col gap-6 w-full">
      {
        fields.map((category: FormData['categories'][number], categoryIndex: number) => {
          return (
            <div className="flex flex-col gap-6 rounded-lg border border-black p-6 items-start w-full" key={category.categoryName}>
              <h1>{category.categoryName}</h1>
              <FormModule canAddModules={category.canAddModules} canDeleteModules={category.canDeleteModules} watch={watch} categoryIndex={categoryIndex} moduleIndex={0} control={control} register={register} key={"moduleCategory" + categoryIndex} />
            </div>
          )
        })
      }
    </div>
  </div>)

  // return (<div className="w-full">
  // <button onClick={() => { console.log(getValues()) }}>
  //   Get Values
  // </button>
  // <div className="flex flex-col gap-6 w-full">
  //   {
  //     fields.map((category: FormData['categories'][number], categoryIndex: number) => {
  //       return (
  //         <div className="flex flex-col gap-6 rounded-lg border border-black p-6 items-start w-full" key={category.categoryName}>
  //           <h1>{category.categoryName}</h1>
  //           {
  //             category.modules.map((module: FormData['categories'][number]['modules'][number], moduleIndex: number) => {
  //               return <FormModule canAddModules={category.canAddModules} watch={watch} categoryIndex={categoryIndex} moduleIndex={moduleIndex} control={control} register={register} key={"moduleCategory" + categoryIndex + "module" + moduleIndex} />
  //             })
  //           }
  //         </div>
  //       )
  //     })
  //   }
  // </div>
  // </div>)
}
