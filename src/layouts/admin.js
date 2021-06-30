import React from 'react'
import Drawer from 'components/Drawer/Drawer.js'
import routes from "adminroutes.js";

export default function adminLayout() {
  return (
    <div>
      <Drawer routes={routes} />
    </div>
  )
}
