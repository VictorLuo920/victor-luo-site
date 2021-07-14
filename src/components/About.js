import {
  Text,
  Flex,
  Heading,
  ButtonGroup,
  useBreakpointValue,
  Button,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function AboutHeader() {
  const deviceType = useBreakpointValue({ base: 'mobile', lg: 'desktop' });

  return (
      <Flex
        paddingX="15px"
        marginX="auto"
        maxWidth="1140px"
        direction={['column', 'column', 'column', 'row']}
      >
        <Flex direction="column" flex="1">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h2" fontSize="4xl" marginBottom=".25rem">
              Victor Luo
            </Heading>
          </Flex>
          <Text fontSize="1.5rem" fontWeight="300" marginBottom="1rem">
            Full Stack Web Developer
          </Text>
          <Text marginBottom="1.5rem">
            I am a full stack developer who is passionate about lots of stuff!
          </Text>
          <Text marginBottom="1.5rem">
            Check out my project portfolio and online resume.
          </Text>
          <ButtonGroup spacing={3} marginBottom="0" paddingBottom="0">
            <NextLink href="/portfolio">
              <Button
                as={Link}
                marginBottom="1rem"
                minWidth="120px"
                colorScheme="blue"
                color="white"
                _hover={{ opacity: '0.9', textDecoration: 'none' }}
                _active={{ opacity: '0.9', textDecoration: 'none' }}
              >
                View Portfolio
              </Button>
            </NextLink>
            <NextLink href="/resume">
              <Button
                as={Link}
                minWidth="120px"
                background="teal.700"
                color="white"
                _hover={{ opacity: '0.9', textDecoration: 'none' }}
                _active={{ opacity: '0.9', textDecoration: 'none' }}
              >
                View Resume
              </Button>
            </NextLink>
          </ButtonGroup>
        </Flex>
      </Flex>
  );
}
