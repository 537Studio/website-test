'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const LightHandle = dynamic(() => import('../NavBar/LightHandle'), {
  ssr: false,
})

export default function LightHandleProvider() {
  return <LightHandle></LightHandle>
}
