/* MemberProvider.tsx */
/* To deal with scrolling */
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { throttle } from 'lodash'

import { Button } from '@/components/ui/button'

export interface MemberProviderProps {
  children: React.ReactNode
  theNumberOfMember: number
}

export default function MemberProvider({
  children,
  theNumberOfMember,
}: MemberProviderProps) {
  // needs: the page the user using(page), the number of all page(need calc)
  const divRef = useRef<HTMLDivElement | null>(null)
  const [theNumberOfMemberInOnePage, setTheNumberOfMemberInOnePage] =
    useState(1)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const [page, setPage] = useState(0)
  const addMarginNumber = useRef(0)

  const nextPage = throttle(() => setPage(page + 1), 500)
  const prevPage = throttle(() => setPage(page - 1), 500)

  const theNumberOfPage = useMemo(() => {
    return Math.ceil(theNumberOfMember / theNumberOfMemberInOnePage)
  }, [theNumberOfMemberInOnePage, theNumberOfMember])

  const marginLeft = useMemo(() => {
    let addNumber = 10
    addNumber += addMarginNumber.current
    // return (offsetWidth + addNumber) * (theNumberOfPage - 1)
    // }, [theNumberOfPage, offsetWidth])
    let realPage = page

    if (realPage > theNumberOfPage) {
      realPage -= Math.floor(realPage / theNumberOfPage) * theNumberOfPage
    }
    return (offsetWidth + addNumber) * realPage
  }, [page, theNumberOfPage, offsetWidth])

  useEffect(() => {
    const handleResize = throttle(() => {
      setOffsetWidth((divRef.current as unknown as HTMLDivElement).offsetWidth)
      // set offset width to set marginLeft
      const windowsWidth = window.innerWidth
      if (windowsWidth >= 1280) {
        setTheNumberOfMemberInOnePage(3)
        addMarginNumber.current = 20
      } else if (windowsWidth >= 1024) {
        setTheNumberOfMemberInOnePage(2)
        addMarginNumber.current = 10
      } else {
        setTheNumberOfMemberInOnePage(1)
        addMarginNumber.current = 0
      }

      setPage((theNumberOfPage + 1) * 500)
    }, 100)

    handleResize() // init
    setPage((theNumberOfPage + 1) * 500)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative h-2/3 sm:h-2/5">
      <Button
        size={'icon'}
        variant="ghost"
        onClick={prevPage}
        className="absolute bottom-0 left-5 top-0 z-10 my-auto rounded-full bg-white drop-shadow-lg dark:bg-gray-950"
      >
        <IoIosArrowBack className="!stroke-black dark:!stroke-white" />
      </Button>
      <Button
        size={'icon'}
        variant="ghost"
        onClick={nextPage}
        className="absolute bottom-0 right-5 top-0 z-10 my-auto rounded-full bg-white drop-shadow-lg dark:bg-gray-950"
      >
        <IoIosArrowForward className="!stroke-black dark:!stroke-white" />
      </Button>

      <div className="m-10 mr-10 mt-5 h-full w-[calc(100%_-_80px)] overflow-hidden rounded-xl bg-white p-5 shadow-lg drop-shadow-lg dark:bg-gray-900 sm:rounded-lg">
        <div
          // className="h-full overflow-x-auto snap-x snap-mandatory flex flex-row flex-nowrap gap-2"
          className="flex h-full flex-row flex-nowrap gap-2 overflow-x-visible duration-300"
          ref={divRef}
          style={{ transform: `translateX(${-marginLeft + 'px'})` }}
          //  style {{ transform: "translateX((widht + 20px) * theNumberOfPage)" }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
