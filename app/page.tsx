import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (<div className="flex flex-col gap-3">
    <p>Welcome to the inspector portal:</p>
    <Button><Link href="/inspection">Start Inspection</Link></Button>
  </div>
  )
}
