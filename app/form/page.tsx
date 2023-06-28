"use client";

import { redirect } from 'next/navigation';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import FormModule, { FormData } from "@/components/FormModule"
import { DevTool } from "@hookform/devtools";
import { useState, useRef } from "react";
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import exportFromJSON from 'export-from-json'

export default function Form() {
  const onSubmit = (data: FormData) => console.log(data);
  const { register, handleSubmit, watch, formState: { errors }, control, getValues, setValue } = useForm<FormData>({
    defaultValues: {
      categories: [
        {
          categoryName: "Core Inspections",
          categoryDescription: "Cut through the layers and examine a sample of the roof system",
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
              modName: "Bird Eye Building Overview",
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
          categoryDescription: "Please enter a score from 0-100.",
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
                  modFieldId: 'healthScore',
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

  const [step, setStep] = useState(0);
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  const stepNames = {
    0: 'Step 1: Input Human Inspection Results',
    1: 'Step 2: Input Drone Inspection Results',
    2: 'Step 3: Input Property Inspection Results',
    3: 'Finish'
  }

  const stepFieldIndices = [0, 15, 22, 26, 26]

  const totalSteps = 3

  const goBack = () => {
    setStep(step - 1);
  };

  const goNext = () => {
    setStep(step + 1);
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: 'categories',
    control
  })

  const renderHeader = () => {
    return <div className='flex justify-between items-start gap-4 mt-4 flex-col'>
      <div className='flex justify-between items-start gap-4'>
        <span className="flex text-gray-500 text-sm font-semibold">11th May, 2023 at 5:30 pm CST </span>
        <Badge className="bg-yellow-300 text-gray-900">SCAN IN PROGRESS</Badge>
      </div>
      <div className='flex justify-between items-start gap-4 mt-4'>
        <MapPin size={30} />
        <span className="flex text-gray-900 text-xl font-bold">123 Miller St, Dallas, TX 75249</span>
      </div>
      <span className="flex text-gray-500 text-sm">Upload all images taken of the property and ensure that all images are in either PNG or JPEG format.</span>
      <div className='flex justify-between items-start gap-4 mt-4 w-full'>
        <h3 className='w-20 text-sm font-semibold'>Progress</h3>
        <Progress value={step * 33 + 1} />
      </div>
    </div>
  }

  const renderNavigation = () => {
    return <div>
      <div className="flex justify-between items-center">
        <span className={'flex gap-2 items-center mt-4 mb-4'}>
          {step != 0
            ? <ArrowLeftCircle className="h-6 cursor-pointer" onClick={() => goBack()} />
            : <ArrowLeftCircle className="h-6" color="grey" />}
          {step != totalSteps
            ? <ArrowRightCircle className="h-6 cursor-pointer" onClick={() => goNext()} />
            : <ArrowRightCircle className="h-6" color="grey" />}
        </span>
      </div>
      <h2 className='text-lg font-bold '>{stepNames[step as keyof typeof stepNames]}</h2>
    </div>
  }

  return (<div className="w-full">
    {renderHeader()}
    {renderNavigation()}
    <h1>Renders:{renderCounter.current}</h1>
    <hr className="my-6" />
    <div className="flex flex-col gap-6 w-full">
      {
        fields.slice(stepFieldIndices[step], stepFieldIndices[step + 1]).map((category: FormData['categories'][number], categoryIndex: number) => {
          return (
            <Accordion type="single" collapsible key={category.categoryName} className="border rounded-2xl p-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <h1 className="text-xl font-medium">{category.categoryName}</h1>
                    {category.categoryDescription &&
                      <h2 className="text-sm font-normal text-slate-500 flex flex-row gap-2 items-center">
                        <Info size={16} />
                        {category.categoryDescription}
                      </h2>}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <FormModule canAddModules={category.canAddModules} canDeleteModules={category.canDeleteModules} watch={watch} categoryIndex={categoryIndex + stepFieldIndices[step]} moduleIndex={0} control={control} register={register} setValue={setValue} key={"moduleCategory" + categoryIndex} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        })
      }
      {step === 3 && <div className="flex flex-col gap-2">
        <Button onClick={() => {
          console.log(getValues())
        }}>Submit Form</Button>
        <Button onClick={() => {
          console.log(getValues())
          const fileName = 'download'
          const exportType = exportFromJSON.types.csv
          const data = getValues().categories
          exportFromJSON({ data, fileName, exportType })
        }}>Download CSV</Button>
      </div>}

    </div>
  </div>)
}
