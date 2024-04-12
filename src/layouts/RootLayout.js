import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <Grid templateColumns="repeat(8,1fr)">
      <GridItem
        colSpan={{ base: 8, sm: 3, md: 2, xl: 2, "2xl": 1 }}
        bg="purple"
        minHeight={{ base: "100px", sm: "100vh" }}
        as="aside"
      >
        <Sidebar />
      </GridItem>
      <GridItem colSpan={{ base: 8, sm: 5, md: 6, xl: 6, "2xl": 7 }}>
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
