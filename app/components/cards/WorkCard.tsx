import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "@remix-run/react";
import { FC, memo } from "react";

type Props = {
  name: string;
  image: string;
  workId: string;
};

export const WorkCard: FC<Props> = memo((props) => {
  const { name, image, workId } = props;
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(`/work/${workId}`);
  };

  return (
    <Box
      w="300px"
      h="300px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      overflowY="auto"
      _hover={{ cursor: "pointer" }}
      onClick={onClickNavigate}
    >
      <VStack>
        <Text
          fontFamily='"Times New Roman", serif'
          fontSize="2xl"
          fontWeight="bold"
          mt="2"
        >
          {name}
        </Text>
        <Image src={image} boxSize="200px" />
      </VStack>
    </Box>
  );
});
