import {
  Box,
  chakra,
  Grid,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WorkCard } from "~/components/cards/WorkCard";
import works from "public/works.json";
import { TypeWork } from "~/type/TypeWork";

const MotionBox = motion.create(motion.div);

export default function Home() {
  return (
    <div>
      <VStack>
        <Box>
          <Stack mt="5" spacing="50">
            <MotionBox
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Stack>
                <Text
                  fontFamily='"Times New Roman", serif'
                  fontSize="4xl"
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
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Stack>
                <Text
                  fontFamily='"Times New Roman", serif'
                  fontSize="4xl"
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
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="4xl"
                fontWeight="bold"
                mt="2"
              >
                My Work
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {works.map((work: TypeWork) => (
                  <WorkCard
                    key={work.id}
                    name={work.name}
                    image={work.imageUrl}
                    workId={work.id}
                  />
                ))}
              </Grid>
            </MotionBox>
          </Stack>
        </Box>
      </VStack>
    </div>
  );
}
