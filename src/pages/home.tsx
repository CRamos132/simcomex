import { Box, Flex } from "@chakra-ui/react";
import Card from "../components/Card";
import { H1, H2, H3 } from "../components/Heading";
import IconLink from "../components/IconLink";
import SideBar from "../components/SideBar";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function Home() {
  return (
    <Box minHeight="100vh" width="100%" backgroundColor="white">
      <SideBar />
      <Box
        minHeight="100vh"
        width="100%"
        padding="32px 32px 32px 182px"
        backgroundColor="white"
      >
        <Flex alignItems="center" gridColumnGap="12px">
          <Flex
            height="80px"
            width="80px"
            backgroundColor="orange.500"
            borderRadius="99px"
            alignItems="center"
            justifyContent="center"
            color="white"
            fontWeight="bold"
          >
            Logo
          </Flex>
          <H1>Nome da empresa</H1>
        </Flex>
        <Flex
          margin="32px 0"
          direction="row"
          gridRowGap="24px"
          gridColumnGap="32px"
          wrap="wrap"
        >
          <Card>
            <H3>Primeiros passos</H3>
            <Flex direction="column" gridRowGap="24px" marginTop="24px">
              <IconLink
                icon={<AiFillCheckCircle size="1.3rem" color="#28b7be" />}
              >
                Configure seu perfil
              </IconLink>
              <IconLink
                icon={<AiOutlineCheckCircle size="1.3rem" color="gray" />}
              >
                Crie sua primeira fatura
              </IconLink>
              <IconLink
                icon={<AiOutlineCheckCircle size="1.3rem" color="gray" />}
              >
                Faça suas simulações!
              </IconLink>
            </Flex>
          </Card>
          <Card>
            <H3>Atalhos</H3>
            <Flex direction="column" gridRowGap="24px" marginTop="24px">
              <IconLink icon={<BsPersonCircle size="1.3rem" color="#28b7be" />}>
                Adicionar membros
              </IconLink>
              <IconLink>Adicionar cliente</IconLink>
              <IconLink>Criar produto</IconLink>
            </Flex>
          </Card>
        </Flex>
        <H2 color="primary.500">Visão geral</H2>
        <Flex
          marginTop="32px"
          direction="row"
          gridRowGap="24px"
          gridColumnGap="32px"
          wrap="wrap"
        >
          <Card>
            <H3>Faturas</H3>
          </Card>
          <Card>
            <H3>Despesas</H3>
          </Card>
        </Flex>
      </Box>
    </Box>
  );
}
