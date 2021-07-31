import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import {
  Link as ChakraLink,
  Text,
  Heading,
  Code,
  UnorderedList,
  List,
  ListIcon,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

export default function Index({ allPostsData }) {
  return (
    <Container height="100vh">
      <Main>
        <Heading>List of Blog Posts</Heading>
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

        <Link href="/">
          <ChakraLink>Back to Home</ChakraLink>
        </Link>
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
