import React from 'react';
import {Text, Accordion,AccordionItem, AccordionIcon, AccordionPanel, AccordionButton ,Code, TabIndicator, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Link, Button } from '@chakra-ui/react';

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
      borderRadius="lg" 
    >
      <Tabs isFitted variant="unstyled" size='md' position='relative'>
        <TabList mb="1em">
          <Tab 
            _hover={{ color: "brand.300" }}
            _active={{ color: "brand.300" }}
            _selected={{ color: "brand.300" }}
          >
            Document Generator
          </Tab>
          <Tab 
            _hover={{ color: "brand.300" }}
            _active={{ color: "brand.300" }}
            _selected={{ color: "brand.300" }}
          >
            Caeterra
          </Tab>
          <Tab 
            _hover={{ color: "brand.300" }}
            _active={{ color: "brand.300" }}
            _selected={{ color: "brand.300" }}
          >
            Time Logger
          </Tab>
          <Tab 
            _hover={{ color: "brand.300" }}
            _active={{ color: "brand.300" }}
            _selected={{ color: "brand.300" }}
          >
            Various Automations
          </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='brand.300' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
            <p>Created a nodeJS electron app which accesses data from a CRM app and use it to create folders and autofill documents. Saved hours in collective time by automating simple repetitive tasks.
            
            </p>
            
            <Link href="https://github.com/aboussenane/PipedriveDocGenerator" isExternal>
            <Button colorScheme="brand" variant="outline" size="md">View on Github</Button>
            </Link>
          </TabPanel>
          <TabPanel>
          <Accordion defaultIndex={[0]} allowToggle>
          <Text fontStyle="italic" fontSize={12}>React, Typescript, Chakra UI, CSS</Text>
          <Text>A landing page for an Ottawa based property managment company. Designed and implemented a simple site which showcases the buisness's services and accomplishements from start to finish.</Text>
          

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Live Site
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <a href='https://caeterra.ca/'>https://caeterra.ca/</a>
              <iframe
                src="https://caeterra.ca/"
                width="100%"
                height="500px"
                style={{ border: "0" }}
                allowFullScreen
              />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Game Site
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <a href='https://rooms.xyz/dankroomz/caeterrahome'>https://rooms.xyz/dankroomz/caeterrahome</a>
              
              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
          <Accordion>
          <Text fontStyle="italic" fontSize={12}>React, Javascript, HTML, CSS</Text>
          <Text>A tool for keeping track of the exact time of events and taking notes.</Text>
          <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Live Site
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <a href='https://master.d1rdr4srhzrrq8.amplifyapp.com/'>Time-Logger</a>
              <iframe
                src="https://master.d1rdr4srhzrrq8.amplifyapp.com/"
                width="100%"
                height="500px"
                style={{ border: "0" }}
                allowFullScreen
              />
              </AccordionPanel>
            </AccordionItem>
            </Accordion>
          </TabPanel>
          <TabPanel>
            <p>Here is a folder full of automations I've created over the years. Coding is an everyday practice in my life so I've only included those which might be useful to someone else.</p>
            <Link href="https://github.com/aboussenane/PipedriveDocGenerator" isExternal>
            <Button colorScheme="brand" variant="outline" size="md">View on Github</Button>
            </Link>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Projects;