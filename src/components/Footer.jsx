import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bgColor = useColorModeValue('#edf2f6'); // Lighter gray for light mode, darker for dark mode
  const textColor = useColorModeValue('gray.600', 'gray.300'); // Darker text for light mode, lighter for dark mode

  return (
    <Flex bg={bgColor} w="100%" p={4} color={textColor} align="center" justify="center">
      <Text fontSize="sm">Curated by RG Chandrasekaraa 👨‍🎨</Text>
    </Flex>
  );
};

export default Footer;
