import { Flex, useDisclosure, Button } from "@chakra-ui/react";
import { useState } from "react";
import { H1, H2 } from "../../../components/Heading";
import ItemModal from "../../../components/ItemModal";
import PageWrapper from "../../../components/PageWrapper";

export interface Item {
  codigo: string;
  descricao: string;
  incoterm: string;
  ncm_codigo: string;
  ncm_descicao: string;
  peso: string;
  processo_importacao: string;
  quantidade: string;
  referencia_fabrica: string;
  unidade: string;
  valor_total: string;
  vuvc_moeda: string;
}

export default function TabelaPagina() {
  const [items, setItems] = useState<Item[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAdd = (item: Item) => {
    setItems((oldState) => [...oldState, item]);
  };
  return (
    <PageWrapper>
      <H1>Fatura</H1>
      {items.map((item) => {
        return <Flex>{JSON.stringify(item)}</Flex>;
      })}
      <Flex direction="row" justifyContent="flex-end">
        <Button colorScheme="primary" variant="outline" onClick={onOpen}>
          Novo item
        </Button>
      </Flex>
      <ItemModal addItem={handleAdd} isOpen={isOpen} onClose={onClose} />
    </PageWrapper>
  );
}
