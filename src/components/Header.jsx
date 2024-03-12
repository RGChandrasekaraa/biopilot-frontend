import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

const Header = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('blue.600', 'blue.300');

  return (
    <Flex bg={bgColor} w="100%" p={6} color={color} align="center" justify="center">
      <Heading fontSize="3xl">🚀 BioPilot</Heading>
    </Flex>
  );
};

export default Header;
