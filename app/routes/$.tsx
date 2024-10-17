import { Flex, Heading, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "@remix-run/react";
import { useCallback } from "react";

export default function Page404() {
  return (
    <VStack>
      <Text
        fontFamily='"Times New Roman", serif'
        fontSize="6xl"
        fontWeight="bold"
        mt="20px"
      >
        Page404
      </Text>
      <Text
        fontFamily='"Times New Roman", serif'
        fontSize="4xl"
        fontWeight="bold"
      >
        ページが見つかりませんでした
      </Text>
    </VStack>
  );
}
