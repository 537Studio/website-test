import React from 'react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getShowMembers } from '@/configs/indexPage'
import { membersPlatform } from '@/types/indexPage'
import capitalizeWords from '@/util/capitalizeWords'

import MemberProvider from './MemberProvider'

export default async function MemberCards() {
  // const t = useTranslations()
  const t = await getTranslations()
  // const t = (string: string) => string
  const showMembers = getShowMembers(t)
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
    <MemberProvider theNumberOfMember={showMembers.length}>
      {showMembers.map((member, index) => {
        return (
          <div
            key={member.toString() + index}
            className="flex h-full w-full flex-shrink-0 snap-start flex-col justify-between p-7 lg:w-1/2 xl:w-1/3"
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
                  <a href={member.shortDescription.href}>
                    {member.shortDescription.name}
                  </a>
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
            <div className="flex flex-col items-center justify-start gap-5 sm:flex-row">
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
                  if (showMembers[index][contactMethod].show === 'none') {
                    return null
                  }
                  return (
                    <>
                      <div
                        className="flex flex-col items-center"
                        key={contactMethod + index + indexContact}
                      >
                        <div>{capitalizeWords(contactMethod)}</div>
                        <a
                          href={
                            (
                              showMembers[index][
                                contactMethod
                              ] as membersPlatform
                            ).href
                          }
                          className="font-medium text-primary underline underline-offset-4"
                        >
                          {isAddAt +
                            (
                              showMembers[index][
                                contactMethod
                              ] as membersPlatform
                            ).name}
                        </a>
                      </div>
                    </>
                  )
                },
              )}
            </div>
          </div>
        )
      })}
    </MemberProvider>
  )
}
