import { Flex, FlexProps } from "@chakra-ui/layout";
import { PropsWithChildren } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Link from "../Link";

interface IProps extends FlexProps {
  icon?: React.ReactNode;
}

export default function IconLink({
  children,
  icon = <AiFillPlusCircle size="1.3rem" color="#28b7be" />,
}: PropsWithChildren<IProps>) {
  return (
    <Flex
      direction="row"
      gridColumnGap="8px"
      color="gray.600"
      alignItems="center"
      fontSize="1.3rem"
    >
      {icon}
      <Link href="/" color="gray.600" fontSize="1.1rem">
        {children}
      </Link>
    </Flex>
  );
}
