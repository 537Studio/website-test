import React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
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
      </body>
    </html>
  )
}
