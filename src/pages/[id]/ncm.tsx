import { Flex, Button, Box, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { H1 } from "../../components/Heading";
import Label from "../../components/Label";
import PageWrapper from "../../components/PageWrapper";
import TextInput from "../../components/TextInput";

export default function NCMPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: Record<string, string>) => {
    console.log("🚀 ~ values", values);
  };
  return (
    <PageWrapper>
      <H1>NCM</H1>
      <Flex
        direction="column"
        gridRowGap="18px"
        as="form"
        width="90%"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="ncm" label="NCM">
            <TextInput
              id="ncm"
              placeholder="NCM"
              type="text"
              {...register("ncm")}
            />
          </Label>
          <Label htmlFor="cod_interno" label="Código interno">
            <TextInput
              id="cod_interno"
              placeholder="Código interno"
              type="text"
              {...register("cod_interno")}
            />
          </Label>
          <Label htmlFor="cod_interno_ncm" label="NCM Código Interno">
            <TextInput
              id="cod_interno_ncm"
              placeholder="Código NCM"
              type="text"
              {...register("cod_interno_ncm")}
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
        <Flex direction="row" gridColumnGap="12px" gridRowGap="12px">
          <Label htmlFor="cest" label="CEST">
            <TextInput
              id="cest"
              placeholder="CEST"
              type="text"
              {...register("cest")}
            />
          </Label>
          <Label htmlFor="cest_desc" label="CEST Descrição">
            <TextInput
              id="cest_desc"
              placeholder="CEST Descrição"
              type="text"
              {...register("cest_desc")}
            />
          </Label>
          <Label htmlFor="cst_origem" label="CST ICMS ORIGEM">
            <TextInput
              id="cst_origem"
              placeholder="CST ICMS ORIGEM"
              type="text"
              {...register("cst_origem")}
            />
          </Label>
        </Flex>
        <Flex direction="row" marginY="12px" justifyContent="flex-end">
          <Button type="submit" variant="outline" colorScheme="primary">
            Salvar
          </Button>
        </Flex>
        <Box as="table" width="100%">
          <Box as="thead" marginBottom="8px" boxShadow="md">
            <Box as="tr" color="primary.500">
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                Tributo
              </Box>
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                Tipo de alíquota
              </Box>
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                % ou R$
              </Box>
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                CST
              </Box>
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                % Benefício Fiscal
              </Box>
              <Box
                as="th"
                padding="8px 12px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
              >
                UF
              </Box>
            </Box>
          </Box>
          <Box height="10px" width="100%" />
          <Box as="tbody" boxShadow="md" fontWeight="bold">
            <Box as="tr">
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                Imposto de Importação (II)
              </Box>
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                <Select>
                  <option>Escolher</option>
                </Select>
              </Box>
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                Núm
              </Box>
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                <Select>
                  <option>Escolher</option>
                </Select>
              </Box>
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                Número
              </Box>
              <Box
                as="td"
                padding="12px 18px"
                margin="8px"
                border="2px solid"
                borderColor="gray.300"
                color="gray.500"
              >
                <Select>
                  <option>UF</option>
                </Select>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </PageWrapper>
  );
}
