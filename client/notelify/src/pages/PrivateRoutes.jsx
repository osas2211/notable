import React from "react"
import { Header } from "../ui-components/Header"
import { Outlet } from "react-router-dom"

export const PrivateRoutes = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
