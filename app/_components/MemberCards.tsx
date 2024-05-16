'use client'

import React from 'react'

import { showMembersType } from '@/configs/indexPage'

export default function MemberCards() {
  return (
    <div className=" relative h-1/2 w-full overflow-hidden">
      <div className="grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-2 overflow-x-auto lg:auto-cols-[50%]">
        {showMembersType.map((item, index) => {
          return (
            <div key={item.toString() + index} className="snap-start p-2">
              111
            </div>
          )
        })}
      </div>
    </div>
  )
}
