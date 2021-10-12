import { Box, Flex } from "@chakra-ui/react";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <Box minHeight="100vh" width="100%" backgroundColor="white">
      <SideBar />
    </Box>
  );
}
