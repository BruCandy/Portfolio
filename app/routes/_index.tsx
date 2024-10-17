import {
  Box,
  chakra,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { WorkCard } from "~/components/cards/WorkCard";
import works from "public/works.json";
import { TypeWork } from "~/type/TypeWork";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MotionBox = motion.create(motion.div);

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // タップ時に開閉処理を実行
  const handleClick = (skill: string) => {
    setActiveSkill(skill === activeSkill ? null : skill);
  };

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
                <VStack align="start" spacing={4}>
                  <Box width="1000px">
                    <HStack
                      onClick={() => handleClick("Python")}
                      _hover={{ cursor: "pointer" }}
                    >
                      <Text
                        fontFamily='"Times New Roman", serif'
                        fontSize="xl"
                        fontWeight="bold"
                      >
                        Python
                      </Text>
                      <Icon
                        as={ChevronDownIcon}
                        boxSize={6}
                        transform={
                          activeSkill === "Python"
                            ? "rotate(180deg)"
                            : "rotate(0deg)"
                        }
                        transition="transform 0.5s ease"
                      />
                    </HStack>
                    {activeSkill === "Python" && (
                      <Text mt={2} whiteSpace="normal" wordBreak="break-word">
                        Pythonは、データサイエンスやAI、Web開発に幅広く使われるプログラミング言語です。
                      </Text>
                    )}
                  </Box>

                  <Box width="1000px">
                    <HStack
                      onClick={() => handleClick("TypeScript")}
                      _hover={{ cursor: "pointer" }}
                    >
                      <Text
                        fontFamily='"Times New Roman", serif'
                        fontSize="xl"
                        fontWeight="bold"
                      >
                        TypeScript
                      </Text>
                      <Icon
                        as={ChevronDownIcon}
                        boxSize={6}
                        transform={
                          activeSkill === "TypeScript"
                            ? "rotate(180deg)"
                            : "rotate(0deg)"
                        }
                        transition="transform 0.5s ease"
                      />
                    </HStack>
                    {activeSkill === "TypeScript" && (
                      <Text mt={2} whiteSpace="normal" wordBreak="break-word">
                        TypeScriptはJavaScriptに型安全性を追加した言語で、スケーラブルなWebアプリケーション開発に最適です。
                      </Text>
                    )}
                  </Box>

                  <Box width="1000px">
                    <HStack
                      onClick={() => handleClick("C#")}
                      _hover={{ cursor: "pointer" }}
                    >
                      <Text
                        fontFamily='"Times New Roman", serif'
                        fontSize="xl"
                        fontWeight="bold"
                      >
                        C#
                      </Text>
                      <Icon
                        as={ChevronDownIcon}
                        boxSize={6}
                        transform={
                          activeSkill === "C#"
                            ? "rotate(180deg)"
                            : "rotate(0deg)"
                        }
                        transition="transform 0.5s ease"
                      />
                    </HStack>
                    {activeSkill === "C#" && (
                      <Text mt={2} whiteSpace="normal" wordBreak="break-word">
                        C#は、マイクロソフトによって開発されたプログラミング言語で、ゲーム開発やエンタープライズアプリケーションに使用されますすすすすすすすす。Unityというゲームエンジンで最も使用されている言語です。
                      </Text>
                    )}
                  </Box>
                </VStack>
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
