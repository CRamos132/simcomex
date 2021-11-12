import {
  Box,
  Drawer,
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
import Link from "next/link";

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
        position="fixed"
        padding="32px 18px"
        justifyContent="space-between"
      >
        <Flex width="100%" direction="column" gridRowGap="1.2rem">
          <Box width="100%">
            <img src="/logo-sm.png" width="79px" height="30px" alt="simcomex" />
          </Box>
          <Button as="a" variant="ghost" color="white" href="/home">
            <AiFillHome size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white">
            <AiOutlineBars size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white">
            <BsPeople size="1.5rem" />
          </Button>
          <Button as="a" href="/ncm/new" variant="ghost" color="white">
            <GoGraph size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white">
            <BsGraphUp size="1.5rem" />
          </Button>
        </Flex>
        <Flex width="100%" direction="column" gridRowGap="1.2rem">
          <Button as="a" variant="ghost" color="yellow">
            <BsPersonCircle size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white" href="/fatura/new">
            <AiOutlineBell size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white" href="/configuracao">
            <FaCog size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white">
            <AiOutlineSearch size="1.5rem" />
          </Button>
          <Button as="a" variant="ghost" color="white">
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
              gridRowGap="1.2rem"
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
                as="a"
                leftIcon={<AiFillHome size="1.5rem" />}
                variant="ghost"
                color="white"
                href="/home"
              >
                Início
              </Button>
              <Button
                as="a"
                leftIcon={<AiOutlineBars size="1.5rem" />}
                variant="ghost"
                color="white"
                href="/fatura/new"
              >
                Fatura
              </Button>
              <Button
                as="a"
                leftIcon={<BsPeople size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Pessoas
              </Button>
              <Button
                as="a"
                leftIcon={<GoGraph size="1.5rem" />}
                variant="ghost"
                color="white"
                href="/ncm/new"
              >
                NCM
              </Button>
              <Button
                as="a"
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
              gridRowGap="1.2rem"
            >
              <Button
                as="a"
                leftIcon={<BsPersonCircle size="1.5rem" />}
                variant="ghost"
                color="yellow"
              >
                Usuário
              </Button>
              <Button
                as="a"
                leftIcon={<AiOutlineBell size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Notificações
              </Button>
              <Button
                as="a"
                leftIcon={<FaCog size="1.5rem" />}
                variant="ghost"
                color="white"
                href="/configuracao"
                // onClick={() => {
                //   push("/configuracao");
                // }}
              >
                Configurações
              </Button>
              <Button
                as="a"
                leftIcon={<AiOutlineSearch size="1.5rem" />}
                variant="ghost"
                color="white"
              >
                Pesquisa
              </Button>
              <Button
                as="a"
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
