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
    { skill: "postgresql", width: "128" },
    { skill: "python", width: "64" },
    { skill: "supabase", width: "107" },
  ];
  return (
    <Box>
      <Heading marginBottom="1rem">Technologies I Use</Heading>

      <Flex justifyContent="center" flexWrap="wrap">
        {techSkills.map((icon) => (
          <Skill
            colorMode={colorMode}
            src={`/images/skills/${icon.skill.toLowerCase()}.svg`}
            alt={icon.skill}
            width="64px"
            key={icon.skill}
          />
        ))}
      </Flex>
    </Box>
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
