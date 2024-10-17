import { Text, VStack } from "@chakra-ui/react";

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
