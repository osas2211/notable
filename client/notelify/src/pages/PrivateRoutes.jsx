import React from "react"
import { Header } from "../ui-components/Header"
import { Outlet } from "react-router-dom"
import { QuickNotes } from "../ui-components/QuickNotes"

export const PrivateRoutes = () => {
  return (
    <div>
      <Header />
      <main>
        <QuickNotes />
        <Outlet />
      </main>
    </div>
  )
}
