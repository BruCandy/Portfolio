import { Flex, Heading, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "@remix-run/react";
import { useCallback } from "react";

export default function Header() {
  return (
    <>
      <Flex
        bg="blackAlpha.200"
        padding={{ base: 3, md: 5 }}
        justify="center" // 水平方向に中央揃え
        align="center"
      >
        <Text
          fontFamily='"Times New Roman", serif'
          fontSize="4xl"
          fontWeight="bold"
        >
          My Portfolio
        </Text>
      </Flex>
    </>
  );
}
