import { AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppBar() {

  return (
    <>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Vocab Builder
            </Typography>
        </Toolbar>
      </MuiAppBar>
    </>
  )
}