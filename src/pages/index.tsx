import { Box, Button, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'



const Home: NextPage = () => {
  return (
    <Box backgroundImage='/bg.png' backgroundSize="cover" minHeight='100vh' width='100%' padding='10vh 0px'>
      <Flex direction='column' alignItems='center'  height='500px' width='50%' minWidth='300px' margin='auto' backgroundColor='white' padding='42px' borderRadius='16px'>
        <img src='/logo.png' width='450px' height='76px' alt='simcomex' />
        
        <Button colorScheme='primary'>Entrar</Button>
      </Flex>
    </Box>
  )
}

export default Home
