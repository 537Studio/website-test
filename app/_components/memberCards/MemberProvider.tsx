'use client'
import React from 'react'
export default function MemberProvider({ children }: { children: React.ReactNode }) {


  return (
    <div className="grid h-full snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-2 lg:auto-cols-[50%] overflow-x-auto"
      style={{ marginLeft: "" }}>
      {children}
    </div>
  )
}
