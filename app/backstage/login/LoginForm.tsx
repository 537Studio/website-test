'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { delay } from 'lodash'

import { backstageLogin } from '@/app/action/backstage'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function LoginForm() {
  const [state, setState] = useState('')

  const actionHandle = async (formData: FormData) => {
    // setState(await backstageLogin(formData))
    setState('server')
  }

  return (
    <form action={actionHandle}>
      <CardContent className="flex flex-col gap-2">
        <div className="flex w-full flex-col gap-1">
          <span className="ml-1">账户</span>
          {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
          <Input
            placeholder="账户名"
            name="username"
            onInput={() => setState('')}
          ></Input>
        </div>
        <div className="flex w-full flex-col gap-1">
          <span className="ml-1">密码</span>
          {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
          <Input
            placeholder="密码"
            type="password"
            name="password"
            onInput={() => setState('')}
          ></Input>
        </div>
      </CardContent>

      <CardFooter className="flex gap-4">
        <Button className="flex-1" type="submit">
          进入
        </Button>
        <AnimatePresence>
          {state !== '' && state != 'success' && (
            <motion.div
              initial={{ opacity: 0.5, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{
                opacity: 0.0,
                width: 0,
                padding: 0,
                transition: { delay: 0.3 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Alert className="flex h-10 items-center" variant={'destructive'}>
                <AlertDescription>
                  {state === 'server' && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.3 } }}
                      transition={{ delay: 0.3 }}
                      className="flex gap-1"
                    >
                      <span className="font-bold">登录失败</span>
                      <span>用户名或密码错误</span>
                    </motion.span>
                  )}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>
      </CardFooter>
    </form>
  )
}
