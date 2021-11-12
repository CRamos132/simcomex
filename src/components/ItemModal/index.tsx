import {
  Flex,
  Button,
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Item } from "../../pages/fatura/[id]/tabela";
import { H2 } from "../Heading";
import Label from "../Label";
import TextInput from "../TextInput";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  addItem: (item: Item) => void;
}

export default function ItemModal({ isOpen, onClose, addItem }: IProps) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: Item) => {
    console.info(values);
    addItem(values);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="70vw" padding="32px">
        <ModalCloseButton />
        <H2 color="primary.500">Novo item</H2>
        <Flex
          direction="column"
          gridRowGap="32px"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Flex direction="row" gridColumnGap="18px">
            <Label htmlFor="codigo" label="Código">
              <TextInput
                id="codigo"
                placeholder="Descrição"
                type="text"
                {...register("codigo")}
              />
            </Label>
            <Label htmlFor="referencia_fabrica" label="Referência da Fábrica">
              <TextInput
                id="referencia_fabrica"
                placeholder="Descrição"
                type="text"
                {...register("referencia_fabrica")}
              />
            </Label>
            <Label htmlFor="descricao" label="Descrição">
              <TextInput
                id="descricao"
                placeholder="Descrição"
                type="text"
                {...register("descricao")}
              />
            </Label>
          </Flex>
          <Flex direction="row" gridColumnGap="18px">
            <Label htmlFor="ncm_codigo" label="NCM código">
              <TextInput
                id="ncm_codigo"
                placeholder="Descrição"
                type="text"
                {...register("ncm_codigo")}
              />
            </Label>
            <Label htmlFor="ncm_descricao" label="NCM Descrição">
              <TextInput
                id="ncm_descicao"
                placeholder="Descrição"
                type="text"
                {...register("ncm_descicao")}
              />
            </Label>
            <Label htmlFor="quantidade" label="Quantidade">
              <TextInput
                id="quantidade"
                placeholder="Descrição"
                type="text"
                {...register("quantidade")}
              />
            </Label>
            <Label htmlFor="unidade" label="Unidade">
              <TextInput
                id="unidade"
                placeholder="Descrição"
                type="text"
                {...register("unidade")}
              />
            </Label>
          </Flex>
          <Flex direction="row" gridColumnGap="18px">
            <Label htmlFor="peso" label="Peso Líquido (kg)">
              <TextInput
                id="peso"
                placeholder="Descrição"
                type="text"
                {...register("peso")}
              />
            </Label>
            <Label htmlFor="vuvc_moeda" label="VUVC moeda">
              <TextInput
                id="vuvc_moeda"
                placeholder="Descrição"
                type="text"
                {...register("vuvc_moeda")}
              />
            </Label>
            <Label htmlFor="valor_total" label="Valor total (moeda)">
              <TextInput
                id="valor_total"
                placeholder="Descrição"
                type="text"
                {...register("valor_total")}
              />
            </Label>
            <Label htmlFor="incoterm" label="INCOTERM">
              <TextInput
                id="incoterm"
                placeholder="Descrição"
                type="text"
                {...register("incoterm")}
              />
            </Label>
          </Flex>
          <Flex direction="row" justifyContent="flex-end" gridColumnGap="18px">
            <Button type="reset" variant="outline">
              Limpar
            </Button>
            <Button type="submit" variant="outline" colorScheme="primary">
              Salvar
            </Button>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
