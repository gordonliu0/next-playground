"use client";

import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { getFormId, uploadData } from './uploadForm'

const supabase = createClient("https://cthvwxtfduovynehetiw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aHZ3eHRmZHVvdnluZWhldGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDMyMjUsImV4cCI6MjAwMzU3OTIyNX0.7kwljuGV7OkWxuwSX9TIRxrFFPSb4_vGETm5PDtSNGk")
// async function uploadFile(path: string, file: File) {
//   const { data, error } = await supabase.storage.from('inspection-form').upload(path, file)
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('All json data uploaded successfully')
//   }
//   return data
// }

async function uploadForm(json: string) {
  const actual = { "form_data": json }
  const { data, error } = await supabase.from('form-test').insert(actual)
  if (error) {
    console.log(error)
  } else {
    console.log('All json data uploaded successfully')
  }
  return data
}

import { PropagateLoader } from 'react-spinners';
import { useForm, useFieldArray, Controller, SubmitHandler } from "react-hook-form";
import FormModule, { FormData } from "@/components/FormModule"
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

const defaultValues = {
  categories: [
    {
      categoryName: "Basic Information",
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
              modFieldId: "Roof Type",
              modFieldValue: undefined,
              modFieldSelectOptions: ["TPO", "PVC", "EPDM", "Modified Bitumen"],
            },
            {
              modFieldType: "string",
              modFieldId: "Property Address",
              modFieldValue: undefined,
            },
            {
              modFieldType: "string",
              modFieldId: "City",
              modFieldValue: undefined,
            },
            {
              modFieldType: "string",
              modFieldId: "State",
              modFieldValue: undefined,
            },
            {
              modFieldType: "string",
              modFieldId: "Zip Code",
              modFieldValue: undefined,
            },
          ],
        },
      ],
    },

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
              modFieldId: "Impact Count",
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
}

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors }, control, getValues, setValue } = useForm<FormData>({
    defaultValues: defaultValues,
  });

  const [step, setStep] = useState(0);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const stepNames = {
    0: 'Step 1: Basic Information',
    1: 'Step 2: Human Inspection',
    2: 'Step 3: Drone Inspection',
    3: 'Step 4: Property Inspection',
    4: 'Step 5: Submit report'
  }

  const stepFieldIndices = [0, 1, 16, 23, 27, 27]

  const totalSteps = 4

  const goBack = () => {
    setStep(step - 1);
  };

  const goNext = () => {
    setStep(step + 1);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true)
    const jsonObject = JSON.stringify(data)
    const r = await uploadForm(jsonObject)
    console.log(r)
    const response = await uploadData(data)
    setLoading(false)
    setDone(true)
    console.log(response)
  }

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: 'categories',
    control
  })

  const renderHeader = () => {
    return <div className='flex justify-between items-start gap-4 mt-4 flex-col'>
      <div className='flex justify-between items-start gap-4'>
        <span className="flex text-gray-500 text-sm font-semibold">11th Jan, 2023 at 1:11:11 pm CST </span>
        <Badge className="bg-yellow-300 text-gray-900">SCAN IN PROGRESS</Badge>
      </div>
      <div className='flex justify-between items-start gap-4 mt-4'>
        <MapPin size={30} />
        <span className="flex text-gray-900 text-xl font-bold">{(watch('categories.0.modules.0.modFields.1.modFieldValue')) ? (watch('categories.0.modules.0.modFields.1.modFieldValue') as string + ' ' + (watch('categories.0.modules.0.modFields.2.modFieldValue') as string) + ', ' + (watch('categories.0.modules.0.modFields.3.modFieldValue') as string)) : 'Property Address'}</span>
      </div>
      <span className="flex text-gray-500 text-sm">Upload all images taken of the property and ensure that all images are in either PNG or JPEG format.</span>
      <div className='flex justify-between items-start gap-4 mt-4 w-full'>
        <h3 className='w-20 text-sm font-semibold'>Progress</h3>
        <Progress value={step * (100 / totalSteps)} />
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
    <hr className="my-6" />
    <form onSubmit={handleSubmit(onSubmit)}>
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
        {step === totalSteps && <div className="flex flex-col gap-2">
          {Object.keys(errors).map((key, index) => {
            return <span key={key}>{key}</span>
          })}
          <Button type="submit">Submit Form</Button>
          <div className="flex flex-col gap-2 items-center justify-center text-lg font-medium">
            {loading && <p>Please give us a moment to process your report.</p>}
            {loading && <PropagateLoader color="#36d7b7" />}
            {done && <span>Done! You are safe to exit the page. </span>}
          </div>
        </div>}
      </div>
    </form>
  </div>)
}


{/* <Button onClick={() => {
            console.log(getValues())
            const fileName = 'download'
            const exportType = exportFromJSON.types.csv
            const data = getValues().categories
            exportFromJSON({ data, fileName, exportType })
          }}>Download CSV</Button> */}