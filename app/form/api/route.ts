import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(process.env.SUPABASE_API_URL as string, process.env.SUPABASE_ANON_KEY as string)

async function uploadFile(path: string, file: File) {
  const { data, error } = await supabase.storage.from('inspection-form').upload(path, file)
  if (error) {
    console.log(error)
  } else {
    console.log('SUCCESS')
  }
}

export async function GET(request: Request) {
  let response = NextResponse.json({ status: '200' })
  return response
}

export async function HEAD(request: Request) { }

async function toJSON(body: ReadableStream) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks: any[] = [];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(''));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }

  return read();
}

export async function POST(request: Request) {
  const b = request.body as ReadableStream<Uint8Array>
  const jsonData = await toJSON(b);
  const file: File = jsonData.categories[1].modules[0].photos[0].photo
  const result = await uploadFile('/hello.jpg', file)
  console.log(result);
  let response = NextResponse.json({ status: '200' })
  return response
}

export async function PUT(request: Request) { }

export async function DELETE(request: Request) { }

export async function PATCH(request: Request) { }