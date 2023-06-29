import { FormData, ModFieldSelect, ModuleData, AppProps } from "@/components/FormModule"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://cthvwxtfduovynehetiw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0aHZ3eHRmZHVvdnluZWhldGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDMyMjUsImV4cCI6MjAwMzU3OTIyNX0.7kwljuGV7OkWxuwSX9TIRxrFFPSb4_vGETm5PDtSNGk")

export async function getFormId() {
  const { data, error } = await supabase
    .from('form-test')
    .select()
  return (data?.length)
}

async function uploadFile(path: string, file: File) {
  const { data, error } = await supabase.storage.from('inspection-form').upload(path, file)
  if (error) {
    console.log(error)
  } else {
    console.log('SUCCESS')
  }
  return data
}

export async function uploadData(data: FormData) {
  const allCategories = data.categories
  const formId = (await getFormId()) as unknown as number
  allCategories.forEach(async function (cat, catIndex) {
    cat.modules.forEach(async function (mod, modIndex) {
      mod.photos.forEach(async function (photo, photoIndex) {
        const response = await uploadFile("/" + [formId.toString(), cat.categoryName, (mod.tags.length !== 0 ? mod.tags[0].value : modIndex.toString()), photoIndex].join('/'), photo.photo)
      })
    })
  })
}