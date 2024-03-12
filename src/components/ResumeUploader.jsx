import { useState } from 'react';
import {
  Container, Button, Textarea, Box, Text, VStack, useToast,
  FormControl, FormLabel, InputGroup, InputLeftElement, Input, Icon
} from '@chakra-ui/react';
import { FaFileUpload } from 'react-icons/fa';

function ResumeUploader()
{
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

    const handleSubmit = async () => {
      // Check if either the resume file or job description is not provided
  if (!resumeFile || !jobDescription) {
    toast({
      title: "Missing information",
      description: "Please upload a resume and enter a job description.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    return;
  }
    // Check if the job description is less than 50 characters
  if (jobDescription.length < 50) {
    toast({
      title: "Job Description Too Short",
      description: "The job description must be at least 50 characters long.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
    return;
  }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_desc', jobDescription);

    setIsLoading(true);
        try {
        const apiUrl = import.meta.env.VITE_EVAL_API_URL;
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      setScore(result.score);
    } catch (error) {
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container centerContent p={5}>
      <Box 
      width={{ base: "100%", sm: "100%", md: "600px" }}
      p={5} 
      shadow="lg" 
      borderWidth="1px" 
      borderRadius="xl" 
      bg="white">
        <VStack spacing={4}>
          <Text fontSize="md">Upload your resume and job description 🎯</Text>

          <FormControl isRequired>
            <FormLabel>Upload Resume (.pdf or .docx)</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<Icon as={FaFileUpload} />} />
              <Input type="file" onChange={handleFileChange} accept=".pdf, .docx" pl="2.5rem" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
                      <FormLabel>Job Description</FormLabel>
                      <Text fontSize="xs">Minimum 50 Characters</Text>
            <Textarea
              placeholder="Enter job description"
              value={jobDescription}
              onChange={handleJobDescriptionChange}
            />
          </FormControl>

          <Button colorScheme="blue" onClick={handleSubmit} isLoading={isLoading}>
            Evaluate
          </Button>

          {score !== null && <Text fontSize="lg" pt="4">Score: <strong>{score}</strong></Text>}
        </VStack>
      </Box>
    </Container>
  );
}

export default ResumeUploader;
