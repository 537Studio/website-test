'use client'

import React from 'react'
import { CiDark, CiLight } from 'react-icons/ci'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function LightHandle() {
  const { setTheme, theme } = useTheme()
  function themeHandle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 rounded-full"
      onClick={themeHandle}
    >
      {/* <AnimatePresence> */}
      {theme === 'light' && (
        <motion.div
          exit={{ rotate: 180, scale: 0.9 }}
          initial={{ rotate: 180, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
        >
          <CiDark className="h-6 w-6 stroke-1" />
        </motion.div>
      )}
      {theme === 'dark' && (
        <motion.div
          initial={{ rotate: 180, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 180, scale: 0.9 }}
        >
          <CiLight className="h-6 w-6 stroke-1" />
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </Button>
  )
}
