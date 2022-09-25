import React from "react"
import { Header } from "../ui-components/Header"
import { Outlet } from "react-router-dom"
import { QuickNotes } from "../ui-components/QuickNotes"
import { useHref } from "react-router-dom"

export const PrivateRoutes = () => {
  const href = useHref()
  return (
    <div>
      <Header />
      <main>
        {href == "/notifications" ? (
          <></>
        ) : href == "/archive" ? (
          <></>
        ) : (
          <QuickNotes />
        )}
        <Outlet />
      </main>
    </div>
  )
}
