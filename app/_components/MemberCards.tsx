'use client'

import React from 'react'

import { showMembers } from '@/configs/indexPage'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import capitalizeWords from '@/util/capitalizeWords'

export default function MemberCards() {
  const memberExcludeKeys = ["name", "shortDescription", "description", "image"]
  const memberContact: string[][] = []
  for (let index = 0; index < showMembers.length; index++) {
    memberContact.push(Object.keys(showMembers[index]).filter(key => !memberExcludeKeys.includes(key)))
  }

  return (
    <div className=" relative h-1/2 w-full overflow-hidden">
      <div className="grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-2 overflow-x-auto lg:auto-cols-[50%] h-full">
        {showMembers.map((member, index) => {
          return (
            <div key={member.toString() + index} className="snap-start p-7 flex flex-col justify-between">
              {/*The avatar of the member*/}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.image.src} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col justify-center'>
                  <div className='text-lg leading-5 font-semibold'>{member.name}</div>
                  <div className='text-sm text-slate-800 dark:text-slate-300'>
                    {member.shortDescription.name}
                  </div>
                </div>
              </div>
              {/*The description of the member*/}
              <div className='leading-7'>
                {/*member.description*/}
                {member.description.split('\n').map((line, index) => (
                  <p key={line.toString() + index}>
                    {line}
                  </p>
                ))}
              </div>
              {/*The accounts of the member*/}
              <div className='flex items-center justify-start gap-5'>
                {memberContact[index].map((contact, indexContact) => {
                  let realContact
                  if (contact === "bilibili" || contact === "github" || contact === "gitee") {
                    realContact = "@" + contact
                  } else {
                    realContact = contact
                  }

                  return <div className='flex flex-col items-center' key={contact + index + indexContact}>
                    <div>{capitalizeWords(realContact)}</div>
                  </div>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
