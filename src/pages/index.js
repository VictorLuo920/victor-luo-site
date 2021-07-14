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
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import  AboutHeader  from "../components/About";
import TechSkills from "../components/TechSkills"

export default function Index({ allPostsData }) {
  return (
    <Container>
      <Main>
        <AboutHeader />
        <TechSkills />
        <Heading>List of Blog Posts</Heading>
        {allPostsData.map(({ id, date, title }) => (
          <Link key={id} href={`/posts/${id}`}>
            <ChakraLink>{title}</ChakraLink>
          </Link>
        ))}
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
