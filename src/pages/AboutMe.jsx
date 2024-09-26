import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';
import headshot from '../assets/headshot2.png';

export default function AboutMe() {
  return (
    <Box p={6} bg="brand.50" borderRadius="md" boxShadow="lg" mt={6} maxW='800px' mx='auto'>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Image 
              src={headshot} 
              alt="Portrait of Travis Phillips" 
              boxSize="220px" 
              borderRadius="full" 
              boxShadow="lg"
              objectfit="fill"
              mr={4}
              mb={6}
            />
          <Box textAlign="justify" mb={6}>
            <Heading as="h1" size="xl" mb={4} fontFamily={"monospace"}>
              Travis Phillips
            </Heading>
              <Text fontSize="md" mb={4} textAlign={"justify"} fontFamily={"monospace"}>
              Greetings, human - my name is Travis. I’m an aspiring software engineer specializing in full stack web development, a guitarist, producer, and all-around hyper-curious individual. My interest in development was initially sparked by two concurrent paths in my life - one being my passion for mathematics (I was formerly a math major in university specializing in group theory, formal language theory, logic, and automata theory), and the other being my love for music production and synthesis in both the hardware and software domains. Over the past year, I’ve learned how to build web solutions with primary technologies and frameworks including Javascript, Node, React, and others, with supplemental knowledge of auxiliary technologies such as Express.js, PostgreSQL and Sequelize, as well as MongoDB and GraphQL. Within the world of software, my own particular  interests are low level programming and audio DSP. To this end, I am currently learning more to expand my skillset including Typescript, Python, C++, and more. 
              </Text>
              <Text fontSize="md" mb={4} textAlign={"justify"} fontFamily={"monospace"}>
              When I am not developing or studying CS material, music is a huge part of my life. I’ve been actively playing guitar since I was ten years old and I grew up playing for metal and hardcore bands in both Northern Utah and Southern California. I still write and produce for metal bands but over the past couple years my focus has shifted to electronic music production and performance under the name Phantom Communique, where I focus on heavier genres of Drum and Bass, Cyberpunk, and EBM. 
              </Text>
              <Text fontSize="md" mb={4} textAlign={"justify"} fontFamily={"monospace"}>
              I’d love to connect with you and talk about building a custom web solution to fit your needs, or just to nerd out over any topic in computer science or music production. 
              </Text>
          </Box>
        </Flex>
    </Box>
  );
}

