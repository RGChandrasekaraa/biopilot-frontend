import { ChakraProvider, Container, Text, VStack, Box, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResumeUploader from './components/ResumeUploader';

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" minHeight="100vh">
        <Header />
        <Box flex="1" bg="gray.100">
          <Container maxW="container.md" pt={5}>
            <VStack spacing={5} align="stretch">
              <Box bg="white" p={5} borderRadius="md" shadow="sm">
                <Text fontSize="xl" mb={3}>
                  Welcome to <b>BioPilot</b> 🌟
                </Text>
                <Text fontSize="md">
                  The advanced resume evaluation tool. Our system uses sophisticated algorithms to analyze resumes against ATS and job descriptions, providing a comprehensive rating. 📊
                </Text>
              </Box>
              <Box bg="#bed4e2" p={5} borderRadius="md" shadow="sm">
                <ResumeUploader />
              </Box>
            </VStack>
          </Container>
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
