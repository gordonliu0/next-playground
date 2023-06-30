import { create } from 'zustand'

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
}

const clone = (items: any) => items.map((item: any) => Array.isArray(item) ? clone(item) : item);

const initialState = defaultValues.categories.map((category: any) => {
  const newModule = category.modules.map((module: any) => {
    return []
  })
  return newModule
})

const reducerAdd = (state: any, { categoryIndex, moduleIndex, payload }: any) => {
  let newCategories = clone(state.categories)
  newCategories[categoryIndex][moduleIndex].push(payload)
  return { ...state, categories: newCategories }
}
const reducerRemove = (state: any, { categoryIndex, moduleIndex, photoIndex }: any) => {
  let newCategories = clone(state.categories)
  newCategories[categoryIndex][moduleIndex].splice(photoIndex, 1)
  return { ...state, categories: newCategories }
}

const reducerAddModule = (state: any, { categoryIndex }: any) => {
  let newCategories = clone(state.categories)
  newCategories[categoryIndex].push([])
  return { ...state, categories: newCategories }
}
const reducerRemoveModule = (state: any, { categoryIndex, moduleIndex }: any) => {
  let newCategories = clone(state.categories)
  newCategories[categoryIndex].splice(moduleIndex, 1)
  return { ...state, categories: newCategories }
}

export const useStore = create((set) => ({
  categories: initialState,
  addPhoto: (args: any) => set((state: any) => reducerAdd(state, args)),
  removePhoto: (args: any) => set((state: any) => reducerRemove(state, args)),
  addModule: (args: any) => set((state: any) => reducerAddModule(state, args)),
  removeModule: (args: any) => set((state: any) => reducerRemoveModule(state, args)),
}))