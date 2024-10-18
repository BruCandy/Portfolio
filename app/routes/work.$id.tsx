import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TypeWork } from "~/type/TypeWork";
import path from "path";
import { promises as fs } from "fs";
import { motion } from "framer-motion";

export let loader: LoaderFunction = async ({ params }) => {
  const filePath = path.join(process.cwd(), "app", "works.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8");
    const projectData = JSON.parse(fileData);

    const work = projectData.find((item: any) => item.id === params.id);
    if (!work) {
      throw new Response("Project Not Found", { status: 404 });
    }

    return work;
  } catch (err) {
    throw new Response("Internal Server Error", { status: 500 });
  }
};

const MotionBox = motion.create(motion.div);

export default function ProjectPage() {
  const projectData = useLoaderData<TypeWork>();

  return (
    <VStack>
      <MotionBox
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Text
          fontFamily='"Times New Roman", serif'
          fontSize="4xl"
          fontWeight="bold"
        >
          {projectData.name}
        </Text>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <HStack>
          {projectData.videoUrl === "動画なし" ? (
            <Box
              w="600px"
              h="400px"
              bg="white"
              borderRadius="10px"
              shadow="md"
              p={4}
            >
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="xl"
                fontWeight="bold"
              >
                動画なし
              </Text>
            </Box>
          ) : (
            <VStack>
              (
              <Text
                fontFamily='"Times New Roman", serif'
                fontSize="2xl"
                fontWeight="bold"
              >
                Video
              </Text>
              <video controls width="600" height="400">
                <source src={projectData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              )
            </VStack>
          )}
          <VStack>
            <Text
              fontFamily='"Times New Roman", serif'
              fontSize="2xl"
              fontWeight="bold"
            >
              Slide
            </Text>
            <embed
              src={projectData.pdfUrl}
              width="600"
              height="400"
              type="application/pdf"
            />
          </VStack>
        </HStack>
      </MotionBox>
    </VStack>
  );
}
