import React, { useState, useEffect } from "react";
import { Box, VStack, Heading, Text, Image, SimpleGrid, Link, IconButton, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(1);

  const bgImages = ["https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1080", "https://images.unsplash.com/photo-1524648829700-99c448a9bbbe?w=1080", "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=1080"];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgOpacity(0);
      setTimeout(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        setBgOpacity(1);
      }, 1000);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setSelectedImage((selectedImage - 1 + dresses.length) % dresses.length);
  };

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % dresses.length);
  };
  const dresses = ["https://images.unsplash.com/photo-1708551471292-acc2a306b433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDF8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDJ8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDN8ZW58MHx8fHwxNzEyNjQ0ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1622266234859-e4654e3587d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDR8ZW58MHx8fHwxNzEyNjQ0ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDV8ZW58MHx8fHwxNzEyNjQ0ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1617187735632-727b180e432d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBkcmVzcyUyMDZ8ZW58MHx8fHwxNzEyNjQ0ODUxfDA&ixlib=rb-4.0.3&q=80&w=1080"];

  return (
    <Box>
      {/* Header */}
      <Box bg="white" py={8} display="flex" alignItems="center" justifyContent="center">
        <Image src="path/to/your/logo.png" alt="Noga Amir Studio Logo" boxSize="100px" mr={4} />
        <Heading as="h1" size="3xl" color="black" fontFamily="playfair display, serif">
          NOGA AMIR STUDIO
        </Heading>
      </Box>

      <Box position="relative" minHeight="400px">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} backgroundImage={`url(${bgImages[bgIndex]})`} backgroundSize="cover" backgroundPosition="center" style={{ opacity: bgOpacity, transition: "opacity 1s" }} />
        <Box position="relative" p={8} display="flex" alignItems="center" justifyContent="center" textAlign="center" minHeight="400px">
          <Box bg="rgba(255, 255, 255, 0.8)" p={8} borderRadius="md">
          <Heading as="h2" size="2xl" mb={6} fontFamily="playfair display, serif">
            About Me
          </Heading>
          <Text>Hi, I'm Sarah! I'm passionate about creating beautiful and elegant dresses for every occasion. With years of experience in fashion design, I strive to bring you the best quality dresses that make you feel confident and stunning.</Text>
        </Box>
      </Box>

      {/* Gallery */}
      <Box p={8}>
        <Heading as="h2" size="2xl" mb={6} fontFamily="playfair display, serif">
          Dress Gallery
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={4}>
          {dresses.map((dress, index) => (
            <Link key={index} onClick={() => openModal(index)}>
              <Image src={dress} alt={`Dress ${index + 1}`} boxSize="400px" objectFit="cover" />
            </Link>
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
      <ImageModal isOpen={isOpen} onClose={closeModal} image={dresses[selectedImage]} onPrev={prevImage} onNext={nextImage} />
    </Box>
  );
};

const ImageModal = ({ isOpen, onClose, image, onPrev, onNext }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="full">
    <ModalOverlay />
    <ModalContent bg="transparent">
      <ModalCloseButton color="white" size="lg" />
      <ModalBody display="flex" justifyContent="center" alignItems="center">
        <IconButton icon={<FaChevronLeft />} onClick={onPrev} size="lg" variant="ghost" color="white" pos="absolute" left={4} />
        <Image src={image} maxH="90vh" />
        <IconButton icon={<FaChevronRight />} onClick={onNext} size="lg" variant="ghost" color="white" pos="absolute" right={4} />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default Index;
