import React from 'react';
import { TabIndicator,Image,Text, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Accordion,AccordionItem, AccordionIcon, AccordionPanel, AccordionButton } from '@chakra-ui/react';

const Internships = () => {
  return (
    <Box p={5}
      width="100%"
      shadow="md"
      border="1px solid"
      borderColor="rgba( 255, 255, 255, 0.18 )"
      boxShadow="0px 8px 8px rgba(31, 38, 135, 0.37)"
      backdropFilter="blur(7px)"
      bg="rgba( 255, 255, 255, 0.1 )"
      borderRadius="lg" // Optional: if you want rounded corners
    >
      <Tabs isFitted variant='unstyled' size='md' position='relative'>
        <TabList mb="1em">
        <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.300" }}  // Styles for when the tab is selected
          >
            Kiuloper
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.300" }}
          >
            Musical Moon
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.300" }}
          >
            Ubineer
          </Tab>
          <Tab 
            _hover={{ color: "brand.50" }}
            _active={{ color: "brand.50" }}
            _selected={{ color: "brand.300",  }}
          >
            Cascadia Carbon
          </Tab>
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='brand.300' borderRadius='1px' />
        <TabPanels>
          <TabPanel>
          <Accordion defaultIndex={[0]} allowToggle>
          <Text>Web developer Intern</Text>
          <Text fontStyle="italic" fontSize={12}>PHP, MySQL, Javascript, HTML, CSS, JQuery</Text>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Backend
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              
              <AccordionPanel pb={4}>
              Implemented business critical features to an existing PHP application. Solved complex problems in an Agile development environment. Solved invoicing database issues when handling orders with multiple vendors,
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Frontend
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Created Sign Up and Login popups and pages for the application. Followed Figma design closely and exceeded expectations by completing work promptly. Generated html content dynamically.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Feedback
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Image src="../public/inwitFeedback.png" alt="Kiuloper Feedback" />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </TabPanel>
          <TabPanel>
          

          
          <Accordion defaultIndex={[0]} allowToggle>
          <Text>React-Native Intern</Text>
          <Text fontStyle="italic" fontSize={12}>Javascript, CSS, React-Native, HTML</Text>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Frontend
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              
              <AccordionPanel pb={4}>
              <Text>Designed and implemented a comprehensive navigation system for a dynamic mobile application, featuring intuitive top, bottom, and side navbars to enhance user experience and accessibility. Developed the application's 'skeleton', establishing a robust framework and a user-friendly music player, thereby laying the groundwork for scalable features and seamless user interaction. </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Feedback
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Still awaiting feedback...
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </TabPanel>
          <TabPanel>
          <Accordion defaultIndex={[0]} allowToggle>
          <Text>NLP/Regex Developer Intern</Text>
          <Text fontStyle="italic" fontSize={12}>Python, Regex</Text>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Natural Language Processing
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              
              <AccordionPanel pb={4}>
              Created regex patterns to efficiently capture past and future natural language data. Utilized clean code principles which resulted in robust patterns which were utilized in production and LLM training. Took on a leadership role in which I held weekly team meetings to help train new interns. 
              </AccordionPanel>
            </AccordionItem>

          
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Feedback
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Image src="../public/ubineerFeedback.png" alt="A placeholder image" />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </TabPanel>
          <TabPanel>
          <Accordion defaultIndex={[0]} allowToggle>
          <Text>Frontend developer Intern</Text>
          <Text fontStyle="italic" fontSize={12}>React, Javascript, HTML, CSS, ChakraUI, NextJS</Text>

            

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Frontend
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Worked as part of a team to implement re-design of React, Next-Js website. Optimized web pages to reduce load time by 40% . Refactored site to facilitate future content updates. Added content and components as needed. 
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Feedback
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              Still awaiting feedback...
              </AccordionPanel>
            </AccordionItem>
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
              <a href='https://carboncodex.app/'>https://carboncodex.app/</a>
              <iframe
                src="https://carboncodex.app/"
                width="100%"
                height="500px"
                style={{ border: "0" }}
                allowFullScreen
              />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Internships;
