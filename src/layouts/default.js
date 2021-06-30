import React from 'react'
import AppBar from 'components/AppBar/AppBar.js'
import CssBaseline from '@material-ui/core/CssBaseline';



export default function defaultLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
    </React.Fragment>
  )
}
