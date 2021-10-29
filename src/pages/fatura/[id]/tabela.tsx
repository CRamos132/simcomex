import {
  Flex,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { H1, H2 } from "../../../components/Heading";
import PageWrapper from "../../../components/PageWrapper";

export default function TabelaPagina() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <PageWrapper>
      <H1>Fatura</H1>
      <Flex direction="row" justifyContent="flex-end">
        <Button colorScheme="primary" variant="outline" onClick={onOpen}>
          Novo item
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <H2>Novo item</H2>
        </ModalContent>
      </Modal>
    </PageWrapper>
  );
}
