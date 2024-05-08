import React from 'react';
import {TabIndicator, Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Box
      p={5}
      shadow="md"
      width="100%"
      border="1px solid"
      borderColor="rgba( 255, 255, 255, 0.18 )"
      boxShadow="0px 8px 8px rgba(31, 38, 135, 0.37)"
      backdropFilter="blur(7px)"
      bg="rgba( 255, 255, 255, 0.1 )"
      borderRadius="lg" // Optional: if you want rounded corners
    >
      <Tabs isFitted variant="unstyled" size='md' position='relative'>
        <TabList mb="1em">
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.50" }}
          >
            Document Generator
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.50" }}
          >
            Caeterra
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.50" }}
          >
            AR Tutorial
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.50" }}
          >
            Time Logger
          </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='brand.300' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
            <p>Details about Project 1...</p>
          </TabPanel>
          <TabPanel>
            <p>Details about Project 2...</p>
          </TabPanel>
          <TabPanel>
            <p>Details about Project 3...</p>
          </TabPanel>
          <TabPanel>
            <p>Details about Project 4...</p>  // Fixed text for consistency
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Projects;