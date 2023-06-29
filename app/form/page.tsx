import Form from "./entireForm"
import type { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: "Form Inspection Form",
}

export default function page() {
  return (
    <Form />
  )
}