import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

import {
  Link as ChakraLink,
  Text,
  Heading,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  Flex,
  HStack,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import AboutHeader from "../components/About";
import TechSkills from "../components/TechSkills";

export default function Index({ allPostsData }) {
  return (
    <Container>
      <Main>
        <AboutHeader />
        <Flex direction={{ base: "column", md: "row" }}>
          <Box maxWidth={{md: "70%"}}>
            <TechSkills />
          </Box>
          <Flex direction="column" >
            <Heading marginBottom="1rem">Latest Posts</Heading>
            <UnorderedList>
              {allPostsData.map(({ id, date, title }) => (
                <ListItem key={id} marginBottom="0.5rem">
                  <Link href={`/posts/${id}`}>
                    <ChakraLink display="block">{title}</ChakraLink>
                  </Link>
                  <Text pl="1rem" fontSize="xs">{date}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Flex>
      </Main>
      <DarkModeSwitch />
    </Container>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
