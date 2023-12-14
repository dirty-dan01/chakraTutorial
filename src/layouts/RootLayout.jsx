import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg={"gray.100"}>
      <span>sidebar</span>
      <GridItem>
        <NavBar></NavBar>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
