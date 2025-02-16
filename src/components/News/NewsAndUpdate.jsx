import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import PostList from "@/components/PostList"


export function NewsAndUpdate() {
  return (
    <>
   
    <div className="grid grid-rows-1 place-items-center">
    <h1 className="text-[1.5rem] font-bold mb-[1.5rem]">School News And Update</h1>
    <ScrollArea className="h-[400px] w-[800px] rounded-md border">
      <div className="p-4">
        <PostList/>
        
      </div>
    </ScrollArea>
    </div>
    
    </>
    
  )
}
