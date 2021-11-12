import { Flex, useDisclosure, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { H1 } from "../../../components/Heading";
import ItemModal from "../../../components/ItemModal";
import PageWrapper from "../../../components/PageWrapper";
import Table from "../../../components/Table";

export interface Item {
  codigo: string;
  descricao: string;
  incoterm: string;
  ncm_codigo: string;
  ncm_descricao: string;
  peso: string;
  processo_importacao: string;
  quantidade: string;
  referencia_fabrica: string;
  unidade: string;
  valor_total: string;
  vuvc_moeda: string;
}

const columns = [
  {
    Header: "Ad",
    accessor: "processo_importacao",
  },
  {
    Header: "Cod",
    accessor: "codigo",
  },
  {
    Header: "Cod Ref",
    accessor: "referencia_fabrica",
  },
  {
    Header: "Descrição",
    accessor: "descricao",
  },
  {
    Header: "NCM",
    accessor: "ncm_codigo",
  },
  {
    Header: "Qt",
    accessor: "quantidade",
  },
  {
    Header: "Peso Líquido (kg)",
    accessor: "peso",
  },
  {
    Header: "INCOTERM",
    accessor: "incoterm",
  },
  {
    Header: "Frete (U$)",
    accessor: "valor_total",
  },
  {
    Header: "Seguro (U$)",
    accessor: "vuvc_moeda",
  },
];

export default function TabelaPagina() {
  const [items, setItems] = useState<Item[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAdd = (item: Item) => {
    setItems((oldState) => [...oldState, item]);
  };
  return (
    <PageWrapper>
      <H1>Fatura</H1>
      <Box marginBottom="12px">
        <Table data={items} columns={columns} />
      </Box>
      <Flex direction="row" justifyContent="flex-end">
        <Button colorScheme="primary" variant="outline" onClick={onOpen}>
          Novo item
        </Button>
      </Flex>
      <ItemModal addItem={handleAdd} isOpen={isOpen} onClose={onClose} />
    </PageWrapper>
  );
}
