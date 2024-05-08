import React from 'react';
import { Button, FormControl, FormLabel, Input, Textarea, Box } from '@chakra-ui/react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    alert('Form submitted!');
  };

  return (
    <Box
      p={5}
      shadow="md"
      border="1px solid"
      borderColor="rgba( 255, 255, 255, 0.18 )"
      boxShadow="0px 8px 8px rgba(31, 38, 135, 0.37)"
      backdropFilter="blur(7px)"
      bg="rgba( 255, 255, 255, 0.1 )"
      borderRadius="lg" // Optional: if you want rounded corners
    >
      <form onSubmit={handleSubmit}>
        <FormControl isRequired marginY={2}>
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input id='name' placeholder='Your Name' />
        </FormControl>
        <FormControl isRequired marginY={2}>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <Input id='email' type='email' placeholder='Your Email' />
        </FormControl>
        <FormControl isRequired marginY={2}>
          <FormLabel htmlFor='message'>Message</FormLabel>
          <Textarea id='message' placeholder='Your Message' />
        </FormControl>
        <Button mt={4} color="brand.50" bg="brand.100" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
