import { Flex, Box, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { H1, H2 } from "../components/Heading";
import Label from "../components/Label";
import PageWrapper from "../components/PageWrapper";
import TextInput from "../components/TextInput";

export default function Configuracao() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: Record<string, string>) => {
    console.info(values);
  };
  return (
    <PageWrapper>
      <H1>Editar perfil</H1>
      <Flex
        direction="row"
        marginTop="32px"
        wrap="wrap"
        gridColumnGap="120px"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex direction="column" gridRowGap="32px" width="300px">
          <Box
            height="250px"
            width="250px"
            backgroundColor="gray.400"
            borderRadius="999px"
          />
          <Flex direction="column" gridRowGap="12px">
            <H2 fontSize="1.3rem" color="primary.500">
              Informações de contato
            </H2>
            <Label htmlFor="email" label="E-mail da empresa">
              <TextInput
                placeholder="Email"
                type="email"
                {...register("email")}
              />
            </Label>
            <Label htmlFor="phone" label="Telefone da empresa">
              <TextInput
                placeholder="(xx)xxxx-xxxx"
                type="tel"
                {...register("phone")}
              />
            </Label>
            <Label htmlFor="site" label="Site">
              <TextInput placeholder="Site" type="text" {...register("site")} />
            </Label>
          </Flex>
        </Flex>
        <Flex direction="column" gridRowGap="32px" width="300px">
          <H2 fontSize="1.3rem" color="primary.500">
            Empresa
          </H2>
          <Label htmlFor="nome" label="Nome da empresa">
            <TextInput
              placeholder="Nome da empresa"
              type="text"
              {...register("nome")}
            />
          </Label>
          <Label htmlFor="razao" label="Razão Social">
            <TextInput
              placeholder="Razão Social"
              type="text"
              {...register("razao")}
            />
          </Label>
          <Label htmlFor="cnpj" label="CNPJ">
            <TextInput placeholder="CNPJ" type="text" {...register("cnpj")} />
          </Label>
          <Box marginTop="32px" textAlign="center">
            <Button
              type="submit"
              colorScheme="primary"
              variant="outline"
              minW="150px"
            >
              Salvar
            </Button>
          </Box>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
