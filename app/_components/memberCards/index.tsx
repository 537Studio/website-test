import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { showMembers } from '@/configs/indexPage'
import { membersPlatform } from '@/types/indexPage'
import capitalizeWords from '@/util/capitalizeWords'
import MemberProvider from './MemberProvider'

export default async function MemberCards() {
  const memberExcludeKeys = ['name', 'shortDescription', 'description', 'image']
  const memberContact: string[][] = []
  for (let index = 0; index < showMembers.length; index++) {
    memberContact.push(
      Object.keys(showMembers[index]).filter(
        (key) => !memberExcludeKeys.includes(key),
      ),
    )
  }

  return (
    <div className="overflow-hidden h-2/3 sm:h-2/5 w-[calc(100%_-_80px)] shadow-lg drop-shadow-lg bg-white m-10 p-5 mr-10 rounded-lg dark:bg-black">
      <MemberProvider page={11} theNumberOfMember={showMembers.length}>
        {showMembers.map((member, index) => {
          return (
            <div
              key={member.toString() + index}
              className="flex snap-start flex-col justify-between p-7 w-full lg:w-1/2 xl:w-1/3 h-full flex-shrink-0"
            >
              {/*The avatar of the member*/}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={member.image.src} alt={member.name} />
                  <AvatarFallback>
                    {member.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                  <div className="text-lg font-semibold leading-5">
                    {member.name}
                  </div>
                  <div className="text-sm text-slate-800 dark:text-slate-300">
                    {member.shortDescription.name}
                  </div>
                </div>
              </div>
              {/*The description of the member*/}
              <div className="leading-7">
                {/*member.description*/}
                {member.description.split('\n').map((line, index) => (
                  <p key={line.toString() + index}>{line}</p>
                ))}
              </div>
              {/*The accounts of the member*/}
              <div className="flex items-center justify-start gap-5 flex-warp">
                {memberContact[index].map(
                  (contactMethod: string, indexContact) => {
                    let isAddAt
                    if (
                      contactMethod === 'bilibili' ||
                      contactMethod === 'github' ||
                      contactMethod === 'gitee'
                    ) {
                      isAddAt = '@'
                    } else {
                      isAddAt = ''
                    }
                    return (
                      <>
                        <div
                          className="flex flex-col items-center"
                          key={contactMethod + index + indexContact}
                        >
                          <div>{capitalizeWords(contactMethod)}</div>
                          <a href={(showMembers[index][contactMethod] as membersPlatform).href} className='font-medium text-primary underline underline-offset-4'>
                            {
                              isAddAt + (
                                showMembers[index][
                                contactMethod
                                ] as membersPlatform
                              ).name
                            }
                          </a>
                        </div>
                        {index === 1 ? <br /> : null}
                      </>
                    )
                  },
                )}
              </div>
            </div>
          )
        })}
      </MemberProvider>
    </div>
  )
}
