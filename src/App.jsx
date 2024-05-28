import './App.css'
import React from 'react';
import Nav from "./components/Nav"
import theme from './theme';
import { ChakraProvider, Box, Avatar } from '@chakra-ui/react'
import Title from './components/Title'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Contact from './components/Contact'
function App() {
  

  return (
    <>
    <ChakraProvider theme={theme}>
    <Box className="App">
        <Nav />
        
        <Box as="section" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Avatar size='2xl' width={350} height={350} name='Adel Boussenane' src='../public/adel.jpg' />
          <Title level={1}>Adel Boussenane</Title>
          <Title level={3}>Fullstack Developer</Title>
        </Box>
        <Box as="section" minHeight="100vh" marginBottom={20} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Title level={2}>About Me</Title>
          <Title level={3}>I am a fullstack developer with a passion for creating web applications.</Title>
      
          <Title level={3}>In my spare time, I like to practice Jiu Jitsu, play music and have barbecues with my friends.</Title>
          <Title level={3}>My favourite food is donair and my favourite book is "Clean Code" by Robert C. Martin.</Title>
          <Title level={3}>On a sunny day, you can find me by the beach cracking open a cold one and reading React documentation.</Title>
        </Box>
        <Box as="section" marginBottom={20} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Title level={2}>Projects</Title>
          <Projects />
        </Box>
        <Box as="section" marginBottom={20}  display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Title level={2}>Internships</Title>
          <Internships />
          
        </Box>
        <Box as="section" marginBottom={20} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Title level={2}>Contact</Title>
          <Contact />
          
        </Box>
      </Box>
    </ChakraProvider>
    
    </>
  )
}

export default App
