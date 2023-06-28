"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import React, { useState, useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import Image from 'next/image';
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { FormData, ModuleData } from "./FormModule"
import { AppProps } from '@/components/FormModFields';


const baseStyle = {
  'flex': 1,
  'display': 'flex',
  'flexdirection': 'column',
  'alignitems': 'center',
  'padding': '20px',
  'border': "dashed 3px rgb(148 163 184)",
  'borderRadius': '12px',
  'backgroundColor': 'transparent',
  'color': '#bdbdbd',
  'outline': 'none',
  'transition': 'border .24s ease-in-out'
};

const focusedStyle = {
  'borderColor': '#2196f3'
};

const acceptStyle = {
  'borderColor': '#00e676'
};

const rejectStyle = {
  'borderColor': '#ff1744'
};

interface CustomFile extends File {
  path: string;
}

const FormModPhotos = ({ categoryIndex, moduleIndex, watch, control, register }: AppProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const { fields, remove, append } = useFieldArray({
    control,
    name: `categories.${categoryIndex}.modules.${moduleIndex}.photos`
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      append({ 'photo': file })
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const tempArray = uploadedImages
        tempArray.push(reader.result as string)
        setUploadedImages(tempArray)
      }
      reader.readAsDataURL(file)
    })
  }, [append, uploadedImages])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({ accept: { 'image/*': [] }, onDrop });

  const style = React.useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  // const onDelete = (i: number) => {
  //   if (store.formData.cores.length == 1) {
  //     store.setCores([])
  //   } else {
  //     store.setCores([...store.formData.cores].filter((item, index) => index !== i))
  //   }
  // }

  // const files = uploadedImages.map((item: string, i: number) => {
  //   return <div className="flex flex-row gap-2 items-center" key={i}>
  //     <div className="">
  //       <AspectRatio.Root ratio={1 / 1} >
  //         <Image width={20} height={20} src={item} alt="preview" className="rounded-md" key={i} />
  //       </AspectRatio.Root>
  //     </div>
  //     <h1>Photo {i}</h1>
  //   </div>
  // });

  const files = fields.map((item: ModuleData['photos'][number], i: number) => {
    return <div key={(item.photo as CustomFile).path}>
      {(item.photo as CustomFile).path}
    </div>
  });

  return (
    <div className="flex flex-col gap-3">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className="text-center">Drop the files here ...</p> :
            <p className="text-center">{"Drag 'n' drop some files here, or click to select files"}</p>
        }
      </div>
      <div className="flex flex-col gap-1 px-6 h-fit">
        {files}
      </div>
    </div>
  );
}

export default FormModPhotos