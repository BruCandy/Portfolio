import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <VStack>
        <Stack mt="5" spacing="50">
          <Box>
            <Stack>
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="2xl"
                fontWeight="bold"
              >
                My Profile
              </Text>
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="xl"
                fontWeight="bold"
              >
                私立大学情報系学科に通う大学２年生。AIに興味がある。
              </Text>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="2xl"
                fontWeight="bold"
                mt="2"
              >
                My Skill
              </Text>
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="xl"
                fontWeight="bold"
              >
                Python TypeScript C#
              </Text>
            </Stack>
          </Box>
          <Box>
            <Text
              fontFamily='"Times New Roman", serif'
              fontSize="2xl"
              fontWeight="bold"
              mt="2"
            >
              My Work
            </Text>
          </Box>
        </Stack>
      </VStack>
    </div>
  );
}
