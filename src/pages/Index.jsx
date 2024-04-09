import React from "react";
import { Box, VStack, Heading, Text, Image, SimpleGrid, Link, IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  const dresses = ["https://images.unsplash.com/photo-1708551471292-acc2a306b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDF8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDJ8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDN8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1622266234859-e4654e3587d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDR8ZW58MHx8fHwxNzEyNjQ0ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDV8ZW58MHx8fHwxNzEyNjQ0ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1617187735632-727b180e432d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDZ8ZW58MHx8fHwxNzEyNjQ0ODUxfDA&ixlib=rb-4.0.3&q=80&w=1080"];

  return (
    <Box>
      {/* Header */}
      <Box bg="gold" py={12}>
        <Heading as="h1" size="3xl" textAlign="center" color="black" fontFamily="playfair display, serif">
          NOGA AMIR STUDIO
        </Heading>
      </Box>

      {/* About Me */}
      <Box p={8}>
        <Heading as="h2" size="2xl" mb={6} fontFamily="playfair display, serif">
          About Me
        </Heading>
        <Text>Hi, I'm Sarah! I'm passionate about creating beautiful and elegant dresses for every occasion. With years of experience in fashion design, I strive to bring you the best quality dresses that make you feel confident and stunning.</Text>
      </Box>

      {/* Gallery */}
      <Box p={8}>
        <Heading as="h2" size="2xl" mb={6} fontFamily="playfair display, serif">
          Dress Gallery
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {dresses.map((dress, index) => (
            <Image key={index} src={dress} alt={`Dress ${index + 1}`} />
          ))}
        </SimpleGrid>
      </Box>

      {/* Contact */}
      <Box p={8}>
        <VStack>
          <Heading as="h2" size="xl" mb={4}>
            Contact Me
          </Heading>
          <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <IconButton icon={<FaWhatsapp />} colorScheme="green" size="lg" aria-label="Contact on WhatsApp" />
          </Link>
          <Text>Click the button to start a WhatsApp conversation with me!</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;
