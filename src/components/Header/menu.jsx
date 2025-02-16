
"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function menu() {
  return (
    <>
<Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Deer Lake First Nation School
          </SheetDescription>
        </SheetHeader>
        <div className='grid grid-cols-1 place-items-center mt-[4rem]'>
          <Link href="/">About</Link>
        </div>

      </SheetContent>
    </Sheet>

    </>
  )
}
