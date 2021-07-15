import { getAllPostIds, getPostData } from "../../lib/posts";
import Link from "next/link";

import { Link as ChakraLink, Box, Text, Heading } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";

export default function Post({ postData }) {
  return (
    <Container height="100vh">
      <Main>
        <Heading>{postData.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href="/">
          <ChakraLink>Home</ChakraLink>
        </Link>
      </Main>
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
