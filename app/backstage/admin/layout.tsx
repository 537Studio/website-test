'use server'

import { Sidebar } from 'lucide-react'
import React from 'react'
import { redirect } from 'next/navigation'

import { canUserLogin } from '@/app/action/backstage'
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  if (!(await canUserLogin())) {
    redirect('/' + process.env.BACKSTAGE_PATH)
  }

  return (
    // <SidebarProvider>
    //   <Sidebar>
    //     <SidebarHeader />
    //     <SidebarContent>
    //       <SidebarGroup />
    //       <SidebarGroup />
    //     </SidebarContent>
    //     <SidebarFooter />
    //   </Sidebar>
    //   <SidebarTrigger></SidebarTrigger>
    //   {children}
    // </SidebarProvider>
    <div> {children}</div>
  )
}
