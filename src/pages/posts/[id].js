import { getAllPostIds, getPostData } from "../../lib/posts";

import { Box, Text } from "@chakra-ui/react";

export default function Post({ postData }) {
  return (
    <Box>
      <Text>{postData.title}</Text>
      <Box dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
    </Box>
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
