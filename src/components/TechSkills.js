import {
  Heading,
  Text,
  Flex,
  useColorMode,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";

export default function TechSkills() {
  const { colorMode } = useColorMode();

  const techSkills = [
    { skill: "javascript", width: "64" },
    { skill: "css", width: "64" },
    { skill: "html", width: "64" },
    { skill: "react", width: "91" },
    { skill: "nextjs", width: "107" },
    { skill: "node", width: "104" },
    { skill: "express", width: "128" },
    { skill: "mongodb", width: "107" },
    { skill: "postgres", width: "128" },
    { skill: "python", width: "64" },
    { skill: "supabase", width: "107" },
  ];
  return (
    <>
      <Heading marginBottom="1rem">Tech Skills</Heading>
      <Text marginBottom="1rem">
        Below is a quick overview of my the main technologies I use.
      </Text>

      <Flex justifyContent="center" flexWrap="wrap">
        {techSkills.map((icon) => (
          <Skill
            colorMode={colorMode}
            src={`/images/skills/${icon.skill.toLowerCase()}.svg`}
            alt={icon.skill}
            width={icon.width}
            key={icon.skill}
          />
        ))}
      </Flex>
    </>
  );
}

function Skill({ colorMode, src, alt, width }) {
  return (
    <Tooltip placement="bottom" label={alt}>
      <Box
        margin="0.5rem"
        borderRadius=".5rem"
        padding="0.5rem"
        background={colorMode === "dark" ? "white" : undefined}
      >
        <Image src={src} alt={alt} height="64px" width={width} />
      </Box>
    </Tooltip>
  );
}
