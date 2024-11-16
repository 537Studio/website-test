import { Sidebar } from 'lucide-react'
import React from 'react'

import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <SidebarTrigger></SidebarTrigger>
      {children}
    </SidebarProvider>
  )
}
