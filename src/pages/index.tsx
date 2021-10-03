import { Box, Button, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Label from '../components/Label';
import Link from '../components/Link';
import TextInput from '../components/TextInput';

const Home: NextPage = () => (
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
      <Flex as="form" direction="column" width="50%" gridRowGap="18px" alignItems="center">
        <Label htmlFor="email" label="Email">
          <TextInput name="email" placeholder="Email" type="email" />
        </Label>
        <Label htmlFor="password" label="Senha">
          <TextInput name="password" placeholder="Senha" type="password" />
        </Label>
        <Button type="submit" colorScheme="primary">Entrar</Button>
        <Link href="/">Esqueceu a senha?</Link>
      </Flex>
      <Link href="/" color="orange.300">Não tem uma conta? Crie agora!</Link>
    </Flex>
  </Box>
);

export default Home;
