import { getAllPostIds, getPostData } from "../../lib/posts";

import { Box, Text } from "@chakra-ui/react";
import { Container } from "../../components/Container";

export default function Post({ postData }) {
  return (
    <Container height="100vh" maxWidth="1140px">
      <Text>{postData.title}</Text>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
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
