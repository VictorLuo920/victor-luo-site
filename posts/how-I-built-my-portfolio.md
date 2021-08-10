---
title: How I Built My Portfolio
date: '2021-08-09'
---

I call myself a JAMSTACK developer because Javascript is the language I began my web development journey in with General Assembly back in early 2020, where I was introduced to the full stack with Node.js, Express.js, React.js and MongoDB. When I finished my coding bootcamp, I dove headfirst into mastering React with an Udemy course, and for my first contract job, I was tasked with building out a front end with React and Chakra—UI, a component library inspired by tailwind CSS that utilizes a CSS-in-JS approach to managing design systems. 

For my blog, I knew I wanted to build with Next.js as the JAMSTACK framework I wanted to become more proficient in. I was attracted to Next.js for its powerful features that can create apps through either client or server side rendering with just a few easy configurations. For styling, I stuck with Chakra, as I now prefer to managed design-related tasks with CSS-in-JS rather than traditional CSS stylesheets, since that’s what I taught myself. Chakra’s ease of use for the new JAMSTACK developer is pretty excellent in my opinion, as its use of style props allow developers to control style within their relevant components in a declarative way within the same component file. I found style props easier for me to adopt than trying to manage multiple CSS sheets/modules, but I’m trying to challenge myself to be proficient about both. 

The cool thing about utilizing Chakra with my blog was that dark mode came right out of the box and is easily customizable. I love that one simple command on my CLI gives me a starter initialized with both Next.js and Chakra…

```
yarn create next-app --example with-chakra-ui victor-luo-site
```

…and that right out of the box I have a tool to easily customize a dark mode with a dark mode switch and a container that listens to the built-in color mode property: as so…


```
import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
```

```
import { Flex, useColorMode } from '@chakra-ui/react'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}

```

And with Next.js, I followed the example set by the [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-appand) tutorial and used the internal filesystem to read my markdown files and parse the metadata and set it as parameters to dynamically route each markdown file as its own blog post page on my website. I hope in the future to take advantage of more of Next.js’ features to build all sorts of things. 