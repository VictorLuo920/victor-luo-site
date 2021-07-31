import {
  Text,
  Flex,
  Heading,
  ButtonGroup,
  useBreakpointValue,
  Button,
  Link,
  IconButton,
  AspectRatio,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import NextLink from "next/link";

export default function AboutHeader() {
  const deviceType = useBreakpointValue({ base: "mobile", lg: "desktop" });

  return (
    <Flex direction="column">
      <Heading
        as="h2"
        fontSize="6rem"
        marginBottom="1rem"
        borderBottom
        borderBottomWidth="1px"
        alignSelf="center"
      >
        Victor Luo
      </Heading>
      <Box m="1rem" alignSelf="center">
        <Image
          src="/images/profile/victor.png"
          width="250"
          height="250"
          layout="intrinsic"
          objectFit="fill"
          className="avatar"
        />
      </Box>
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
      <ButtonGroup alignSelf="center">
        <IconButton
          as={Link}
          href="https://github.com/Victorluo920"
          variant="ghost"
          icon={<FaGithub />}
          _hover={{
            outline: "none",
            transform: "translateY(-5px)",
          }}
        />
        <IconButton
          as={Link}
          href="https://linkedin.com/in/victorwluo/"
          variant="ghost"
          icon={<FaLinkedin />}
          _hover={{
            outline: "none",
            transform: "translateY(-5px)",
          }}
        />
        <IconButton
          as={Link}
          href="https://twitter.com/victorwluo"
          variant="ghost"
          icon={<FaTwitter />}
          _hover={{
            outline: "none",
            transform: "translateY(-5px)",
          }}
        />
        <IconButton
          as={Link}
          href="https://instagram.com/victorwluo/"
          variant="ghost"
          icon={<FaInstagram />}
          _hover={{
            outline: "none",
            transform: "translateY(-5px)",
          }}
        />
      </ButtonGroup>
      <Text marginBottom="1.5rem">
        Hi! I am a Los Angeles-based JAMSTACK developer passionate about
        creating applications and experiences that engage people and make a
        meaningful impact. When I'm not working as a freelancer building
        products, I'm out and about the SoCal comedy scene and working on my
        novel.
      </Text>

      <Text marginBottom="1.5rem">
        Check out my resume and read my blog posts to find out more!
      </Text>

      <ButtonGroup spacing={3} marginBottom="0" paddingBottom="0">
        <NextLink href="/resume.pdf">
          <Button
            as={Link}
            marginBottom="1rem"
            minWidth="120px"
            colorScheme="blue"
            color="white"
            _hover={{ opacity: "0.9", textDecoration: "none" }}
            _active={{ opacity: "0.9", textDecoration: "none" }}
          >
            View Resume
          </Button>
        </NextLink>
        <NextLink href="/posts">
          <Button
            as={Link}
            minWidth="120px"
            background="teal.700"
            color="white"
            _hover={{ opacity: "0.9", textDecoration: "none" }}
            _active={{ opacity: "0.9", textDecoration: "none" }}
          >
            View Blog
          </Button>
        </NextLink>
      </ButtonGroup>
    </Flex>
  );
}
