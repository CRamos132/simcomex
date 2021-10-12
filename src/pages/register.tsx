import { Box, Button, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Label from "../components/Label";
import TextInput from "../components/TextInput";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = (values: Record<string, string>) => {
    console.info(values);
    router.push("/home");
  };
  return (
    <Box
      backgroundImage="/bg.png"
      backgroundSize="cover"
      minHeight="100vh"
      width="100%"
      padding="10vh 0px"
    >
      <Flex
        direction="column"
        alignItems="center"
        minHeight="500px"
        width="40%"
        minWidth="300px"
        margin="auto"
        backgroundColor="white"
        padding="42px"
        borderRadius="16px"
        gridRowGap="24px"
        boxShadow="4px 4px 50px rgba(0, 0, 0, 0.1)"
      >
        <img src="/logo.png" width="450px" height="76px" alt="simcomex" />
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          direction="column"
          width="80%"
          gridRowGap="18px"
          alignItems="center"
        >
          <Flex
            direction="row"
            gridColumnGap="24px"
            width="100%"
            justifyContent="space-between"
          >
            <Label htmlFor="name" label="Nome">
              <TextInput placeholder="Nome" type="text" {...register("name")} />
            </Label>
            <Label htmlFor="lastname" label="Sobrenome">
              <TextInput
                placeholder="Sobrenome"
                type="text"
                {...register("lastname")}
              />
            </Label>
          </Flex>
          <Label htmlFor="email" label="Email">
            <TextInput
              placeholder="Email"
              type="email"
              {...register("email")}
            />
          </Label>
          <Label htmlFor="password" label="Senha">
            <Flex direction="row" position="relative" width="100%">
              <TextInput
                placeholder="Senha"
                type={show ? "text" : "password"}
                {...register("password")}
              />
              <Button
                h="1.75rem"
                size="sm"
                variant="ghost"
                onClick={handleClick}
                position="absolute"
                right="1rem"
                top="21%"
              >
                {show ? (
                  <AiFillEyeInvisible size="1.2rem" />
                ) : (
                  <AiFillEye size="1.2rem" />
                )}
              </Button>
            </Flex>
          </Label>
          <Button type="submit" colorScheme="orange">
            Criar conta
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
