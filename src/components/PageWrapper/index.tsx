import { Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../SideBar";

export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <Box minHeight="100vh" width="100%" backgroundColor="white">
            <SideBar />
            <Box
                minHeight="100vh"
                width="100%"
                padding="32px 32px 32px 182px"
                backgroundColor="white"
            >
                {children}
            </Box>
        </Box>
    )
}