import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg={"gray.200"}>
      <GridItem 
        as={"aside"}
        colSpan={"1"}
        bg={"purple.100"}
        minHeight={"100vh"}
        p={"10"}        
      >
        <span>sidebar</span>
      </GridItem>
      <GridItem
        as={"main"}
        colSpan={"5"}
        p={"40px"}
      >
        <NavBar></NavBar>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
