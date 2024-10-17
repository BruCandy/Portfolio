import { Flex, Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";

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
          fontSize="6xl"
          fontWeight="bold"
          _hover={{ cursor: "pointer" }}
        >
          <Link to="/">My Portfolio</Link>
        </Text>
      </Flex>
    </>
  );
}
