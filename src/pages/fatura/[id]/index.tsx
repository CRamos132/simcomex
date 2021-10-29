import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { H1 } from "../../../components/Heading";
import PageWrapper from "../../../components/PageWrapper";
import Label from "../../../components/Label";
import TextInput from "../../../components/TextInput";
import { Button } from "@chakra-ui/button";
import { useRouter } from "next/dist/client/router";

export default function Fatura() {
  const { register, handleSubmit } = useForm();
  const { push, query } = useRouter();
  const { id } = query;
  const onSubmit = (values: Record<string, string>) => {
    console.info(values, id);
    push(`/fatura/${id}/tabela`);
  };
  return (
    <PageWrapper>
      <H1>Fatura</H1>
      <Flex
        direction="column"
        gridRowGap="18px"
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="processo_importacao" label="Processo de importação">
            <TextInput
              id="processo_importacao"
              placeholder="Descrição"
              type="text"
              {...register("processo_importacao")}
            />
          </Label>
          <Label htmlFor="numero_fatura" label="Número da fatura">
            <TextInput
              id="processo_importacao"
              placeholder="Descrição"
              type="text"
              {...register("numero_fatura")}
            />
          </Label>
          <Label htmlFor="numero_di" label="Número da DI">
            <TextInput
              id="numero_di"
              placeholder="Descrição"
              type="text"
              {...register("numero_di")}
            />
          </Label>
          <Label htmlFor="importacao" label="Importação">
            <TextInput
              id="importacao"
              placeholder="Descrição"
              type="text"
              {...register("importacao")}
            />
          </Label>
        </Flex>
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="importador" label="Importador">
            <TextInput
              id="importador"
              placeholder="Nome do importador do produto"
              type="text"
              {...register("importador")}
            />
          </Label>
          <Label
            htmlFor="regime_tributario_importador"
            label="Regime tributário do Importador"
          >
            <TextInput
              id="regime_tributario_importador"
              placeholder="Descrição"
              type="text"
              {...register("regime_tributario_importador")}
            />
          </Label>
          <Label
            htmlFor="regime_tributario_adquirente"
            label="Regime Tributário do Adquirente"
          >
            <TextInput
              id="regime_tributario_adquirente"
              placeholder="Descrição"
              type="text"
              {...register("regime_tributario_adquirente")}
            />
          </Label>
        </Flex>
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="simulacao_data" label="Data da Simulação">
            <TextInput
              id="simulacao_data"
              placeholder="Escolha a data"
              type="date"
              {...register("simulacao_data")}
            />
          </Label>
          <Label htmlFor="fatura_data" label="Data da Fatura">
            <TextInput
              id="fatura_data"
              placeholder="Escolha a data"
              type="date"
              {...register("fatura_data")}
            />
          </Label>
          <Label htmlFor="modal_frete" label="Modal do Frete">
            <TextInput
              id="modal_frete"
              placeholder="Descrição"
              type="text"
              {...register("modal_frete")}
            />
          </Label>
          <Label htmlFor="tipo_navegacao" label="Tipo de Navegação">
            <TextInput
              id="tipo_navegacao"
              placeholder="Descrição"
              type="text"
              {...register("tipo_navegacao")}
            />
          </Label>
        </Flex>
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="valor_fob" label="Valor FOB">
            <TextInput
              id="valor_fob"
              placeholder="Valor"
              type="number"
              {...register("valor_fob")}
            />
          </Label>
          <Label htmlFor="valor_frete" label="Valor do Frete">
            <TextInput
              id="valor_frete"
              placeholder="Valor"
              type="Number"
              {...register("valor_frete")}
            />
          </Label>
          <Label htmlFor="valor_seguro" label="Valor do Seguro">
            <TextInput
              id="valor_seguro"
              placeholder="Valor"
              type="Number"
              {...register("valor_seguro")}
            />
          </Label>
          <Label htmlFor="valor_acrescimo" label="Valor do Acréscimo">
            <TextInput
              id="valor_acrescimo"
              placeholder="Valor"
              type="Number"
              {...register("valor_acrescimo")}
            />
          </Label>
        </Flex>
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="moeda_vucv" label="Moeda do VUCV">
            <TextInput
              id="moeda_vucv"
              placeholder="Valor"
              type="number"
              {...register("moeda_vucv")}
            />
          </Label>
          <Label htmlFor="moeda_frete" label="Moeda do Frete">
            <TextInput
              id="moeda_frete"
              placeholder="Valor"
              type="number"
              {...register("moeda_frete")}
            />
          </Label>
          <Label htmlFor="moeda_seguro" label="Moeda do Seguro">
            <TextInput
              id="moeda_seguro"
              placeholder="Valor"
              type="number"
              {...register("moeda_seguro")}
            />
          </Label>
          <Label htmlFor="moeda_acrescimo" label="Moeda do Acréscimo">
            <TextInput
              id="moeda_acrescimo"
              placeholder="Valor"
              type="number"
              {...register("moeda_acrescimo")}
            />
          </Label>
        </Flex>
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="taxa_moeda_vucv" label="Taxa Moeda do VUCV">
            <TextInput
              id="taxa_moeda_vucv"
              placeholder="Valor"
              type="number"
              {...register("taxa_moeda_vucv")}
            />
          </Label>
          <Label htmlFor="taxa_moeda_frete" label="Taxa Moeda do Frete">
            <TextInput
              id="taxa_moeda_frete"
              placeholder="Valor"
              type="number"
              {...register("taxa_moeda_frete")}
            />
          </Label>
          <Label htmlFor="taxa_moeda_seguro" label="Taxa Moeda do Seguro">
            <TextInput
              id="taxa_moeda_seguro"
              placeholder="Valor"
              type="number"
              {...register("taxa_moeda_seguro")}
            />
          </Label>
          <Label htmlFor="taxa_moeda_acrescimo" label="Taxa Moeda do Acréscimo">
            <TextInput
              id="taxa_moeda_acrescimo"
              placeholder="Valor"
              type="number"
              {...register("taxa_moeda_acrescimo")}
            />
          </Label>
        </Flex>
        <Flex direction="row" justifyContent="flex-end" gridColumnGap="18px">
          <Button variant="outline" colorScheme="gray" type="reset">
            Limpar
          </Button>
          <Button variant="outline" colorScheme="primary" type="submit">
            Salvar
          </Button>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
