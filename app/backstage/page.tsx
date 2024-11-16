import React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="flex w-1/2 flex-col gap-3 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
            登入
          </CardTitle>
          <CardDescription className="text-sm text-slate-500">
            和 537-Studio 一起畅聊
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-2">
          <div className="flex w-full flex-col gap-1">
            <span className="ml-1">账户</span>
            {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
            <Input placeholder="账户名"></Input>
          </div>
          <div className="flex w-full flex-col gap-1">
            <span className="ml-1">密码</span>
            {/* <Input className="flex-1 border-b-[1px] text-base outline-none duration-200 focus:border-blue-600"></Input> */}
            <Input placeholder="密码" type="password"></Input>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full">进入</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
