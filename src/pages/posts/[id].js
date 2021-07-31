import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";

import { Link as ChakraLink, Box, Text, Heading } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";
import { DarkModeSwitch } from "../../components/DarkModeSwitch";

import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

export default function Post({ postData }) {
  return (
    <Container>
      <Main flexGrow="1">
        <Heading>{postData.title}</Heading>
        <Heading fontSize="md">first published on {postData.date}</Heading>
        <ReactMarkdown
          components={ChakraUIRenderer()}
          children={postData.content}
        />
        <Link href="/posts">
          <ChakraLink>Back to Posts</ChakraLink>
        </Link>
      </Main>
      <DarkModeSwitch />

    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
