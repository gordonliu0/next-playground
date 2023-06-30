"use client";

import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import React, { useState, useCallback } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import Image from 'next/image';
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { FormData, ModuleData } from "./FormModule"
import { AppProps } from '@/components/FormModule';
import { Trash2 } from "lucide-react";
import { useStore } from '@/app/inspection/store'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImageGallery from 'react-image-gallery';

const baseStyle = {
  'flex': 1,
  'display': 'flex',
  'flexdirection': 'column',
  'alignitems': 'center',
  'borderStyle': 'dashed',
  'borderWidth': '1px',
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
  const categories = useStore((state: any) => state.categories)
  const addPhoto = useStore((state: any) => state.addPhoto)
  const removePhoto = useStore((state: any) => state.removePhoto)

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
        const result = reader.result
        console.log(result)
        addPhoto({ categoryIndex, moduleIndex, payload: reader.result as string })
      }
      reader.readAsDataURL(file)
    })
    acceptedFiles = [];
  }, [addPhoto, categoryIndex, moduleIndex, append])

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

  const onDelete = (index: number) => {
    remove(index)
    removePhoto({ categoryIndex, moduleIndex, photoIndex: index })
  }

  const files = fields.map((item: ModuleData['photos'][number], i: number) => {
    return <div className="flex flex-row gap-2 items-center justify-start" key={(item.photo as CustomFile).path}>
      <div style={{ position: 'relative', width: '100px', height: '100px' }}>
        <Image
          className="rounded-2xl"
          style={{ objectFit: 'cover' }}
          src={categories[categoryIndex][moduleIndex][i]}
          fill
          alt="Picture of the author"
        />
      </div>
      <button key={(item.photo as CustomFile).path} className="flex flex-row gap-2 items-center justify-start" onClick={() => onDelete(i)}>
        <Trash2 size={12} />
      </button>
      {(item.photo as CustomFile).path}
    </div>

  });

  if (watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags`).length !== 0) {
    const damageCondition = watch(`categories.${categoryIndex}.modules.${moduleIndex}.tags.0.value`)
    if (damageCondition == "") {
      return;
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-sm font-medium">Photo upload</h1>
      <div {...getRootProps({ style })} className="rounded-2xl flex justify-center items-center p-10">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className="text-center text-sm text-muted-foreground">Drop the files here ...</p> :
            <p className="text-center text-sm text-muted-foreground w-48">{"drag and drop or click to upload photos"}</p>
        }
      </div>
      {
        categories[categoryIndex][moduleIndex].length !== 0 &&
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Photo Gallery</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[720px]">
            <DialogHeader>
              <DialogTitle>Photo Gallery</DialogTitle>
              <DialogDescription>
                {"Review your uploaded photos"}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center items-center">
              <ImageGallery
                showThumbnails={false}
                items={categories[categoryIndex][moduleIndex].map((photo: string) => { return { original: photo } })}
              />
            </div>
          </DialogContent>
        </Dialog>
      }
      {fields.length !== 0 && <div className="flex flex-col gap-1 px-3 h-fit">
        {files}
      </div>}
    </div>
  );
}

export default FormModPhotos