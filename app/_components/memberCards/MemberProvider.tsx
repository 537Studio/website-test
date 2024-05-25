/* MemberProvider.tsx */
/* To deal with scrolling */
'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { throttle } from 'lodash';

export interface MemberProviderProps {
  children: React.ReactNode
  page: number
  theNumberOfMember: number
}

export default function MemberProvider({ children, page, theNumberOfMember }: MemberProviderProps) {
  // needs: the page the user using(page), the number of all page(need calc)
  const divRef = useRef<HTMLDivElement | null>(null);
  const [theNumberOfMemberInOnePage, setTheNumberOfMemberInOnePage] = useState(1)
  const [offsetWidth, setOffsetWidth] = useState(0)
  const addMarginNumber = useRef(0)

  const theNumberOfPage = useMemo(() => {
    console.log(theNumberOfMember, theNumberOfMemberInOnePage)
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
      const windowsWidth = window.innerWidth;
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
    }, 100);

    handleResize() // init 

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      // className="h-full overflow-x-auto snap-x snap-mandatory flex flex-row flex-nowrap gap-2"
      className="h-full overflow-x-visible flex flex-row flex-nowrap gap-2"
      ref={divRef}
      style={{ transform: `translateX(${-marginLeft + "px"})` }}
    // style {{ transform: "translateX((widht + 20px) * theNumberOfPage)" }}
    >
      {children}
    </div>
  )
}
