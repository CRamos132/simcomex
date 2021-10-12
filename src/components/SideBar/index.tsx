import {
  Box,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import {
  AiFillHome,
  AiOutlineBars,
  AiOutlineBell,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BsPeople,
  BsGraphUp,
  BsPersonCircle,
  BsQuestionCircle,
} from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { FaCog } from "react-icons/fa";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        height="100vh"
        width="100px"
        direction="column"
        backgroundColor="contrast.800"
        position="relative"
        padding="32px 18px"
        justifyContent="space-between"
      >
        <Flex width="100%" direction="column" gridRowGap="24px">
          <Box width="100%">
            <img src="/logo-sm.png" width="79px" height="30px" alt="simcomex" />
          </Box>
          <Button variant="ghost" color="white">
            <AiFillHome size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <AiOutlineBars size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <BsPeople size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <GoGraph size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <BsGraphUp size="1.5rem" />
          </Button>
        </Flex>
        <Flex width="100%" direction="column" gridRowGap="24px">
          <Button variant="ghost" color="yellow">
            <BsPersonCircle size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <AiOutlineBell size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <FaCog size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <AiOutlineSearch size="1.5rem" />
          </Button>
          <Button variant="ghost" color="white">
            <BsQuestionCircle size="1.5rem" />
          </Button>
        </Flex>
        <Button
          position="absolute"
          right="-50px"
          top="25px"
          colorScheme="teal"
          onClick={onOpen}
          width="50px"
          borderLeftRadius="0px"
          height="50px"
        >
          {">"}
        </Button>
      </Flex>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="contrast.800" height="100vh">
          <Flex
            height="100vh"
            width="100%"
            display="flex"
            direction="column"
            padding="32px 18px"
            position="relative"
            justifyContent="space-between"
          >
            <Button
              position="absolute"
              right="-50px"
              top="25px"
              colorScheme="teal"
              onClick={onClose}
              width="50px"
              borderLeftRadius="0px"
              height="50px"
            >
              {"<"}
            </Button>
            <Flex
              width="100%"
              direction="column"
              gridRowGap="24px"
              alignItems="flex-start"
            >
              <Flex
                width="100%"
                height="32px"
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <img
                  src="/logo-negative.png"
                  width="200px"
                  height="30px"
                  alt="simcomex"
                />
              </Flex>
              <Button
                leftIcon={<AiFillHome size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Início
              </Button>
              <Button
                leftIcon={<AiOutlineBars size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Fatura
              </Button>
              <Button
                leftIcon={<BsPeople size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Pessoas
              </Button>
              <Button
                leftIcon={<GoGraph size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                NCM
              </Button>
              <Button
                leftIcon={<BsGraphUp size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Tipo de despesa
              </Button>
            </Flex>
            <Flex
              alignItems="flex-start"
              width="100%"
              direction="column"
              gridRowGap="24px"
            >
              <Button
                leftIcon={<BsPersonCircle size="1.5rem" />}
                variant="ghost"
                color="yellow"
              >
                Usuário
              </Button>
              <Button
                leftIcon={<AiOutlineBell size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Notificações
              </Button>
              <Button
                leftIcon={<FaCog size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Configurações
              </Button>
              <Button
                leftIcon={<AiOutlineSearch size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Pesquisa
              </Button>
              <Button
                leftIcon={<BsQuestionCircle size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Dúvidas
              </Button>
            </Flex>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
