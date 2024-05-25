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

export default function MemberProvider({ children, page }: MemberProviderProps) {
  // needs: the page the user using(page), the number of all page(need calc)

  const divRef = useRef(null)
  const [offsetWidth, setOffsetWidth] = useState(0)

  const marginLeft = useMemo(() => {
    return (offsetWidth + 20) * page
  }, [page, offsetWidth])


  useEffect(() => {
    setOffsetWidth((divRef.current as unknown as HTMLDivElement).offsetWidth)
    const handleResize = throttle(() => {
      setOffsetWidth((divRef.current as unknown as HTMLDivElement).offsetWidth)
    }, 100);

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
