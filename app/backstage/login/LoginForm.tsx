'use client'

import React from 'react'

import { backstageLogin } from '@/app/action/backstage'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function LoginForm() {
  return (
    <form action={backstageLogin}>
      <CardContent className="flex flex-col gap-2">
        <div className="flex w-full flex-col gap-1">
          <span className="ml-1">账户</span>
          {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
          <Input placeholder="账户名" name="username"></Input>
        </div>
        <div className="flex w-full flex-col gap-1">
          <span className="ml-1">密码</span>
          {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
          <Input placeholder="密码" type="password" name="password"></Input>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" type="submit">
          进入
        </Button>
      </CardFooter>
    </form>
  )
}
