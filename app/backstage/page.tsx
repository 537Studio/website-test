'use server'

import React from 'react'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { backstageLogin, canUserLogin } from '../action/backstage'
import LoginForm from './login/LoginForm'

export default async function page() {
  if (await canUserLogin()) {
    redirect('/' + process.env.BACKSTAGE_PATH + '/admin')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="flex w-1/2 flex-col gap-3 rounded-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
            登入
          </CardTitle>
          <CardDescription className="text-sm text-slate-500">
            和 537 Studio 一起畅聊
          </CardDescription>
        </CardHeader>

        <LoginForm></LoginForm>
      </Card>
    </div>
  )
}
