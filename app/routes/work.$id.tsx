import { HStack, Text, VStack } from "@chakra-ui/react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate, useParams } from "@remix-run/react";
import { TypeWork } from "~/type/TypeWork";
import path from "path";
import { promises as fs } from "fs";

export let loader: LoaderFunction = async ({ params }) => {
  const filePath = path.join(process.cwd(), "public/works.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const projectData: TypeWork[] = JSON.parse(fileData);

  const work = projectData.find((item) => item.id === params.id);
  if (!work) {
    throw new Response("Project Not Found", { status: 404 });
  }

  return work;
};

export default function ProjectPage() {
  const projectData = useLoaderData<TypeWork>();

  return (
    <VStack>
      <Text
        fontFamily='"Times New Roman", serif'
        fontSize="4xl"
        fontWeight="bold"
      >
        {projectData.name}
      </Text>

      <HStack>
        <VStack>
          <Text
            fontFamily='"Times New Roman", serif'
            fontSize="2xl"
            fontWeight="bold"
          >
            Video
          </Text>
          <video controls width="600">
            <source src={projectData.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VStack>
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
    </VStack>
  );
}
