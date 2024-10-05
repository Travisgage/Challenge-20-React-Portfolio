import { Flex,Container, Heading, Text, Button, Box } from '@chakra-ui/react';
import TechStacks from '../components/TechStacks';
import { motion } from 'framer-motion';

export default function Resume() {
    const styles= {
        background: {
            color: '#e6d7e6',
            width: '100%',
            borderRadius: '30px',
            boxShadow: '0 4px 12px var(--night)'
        },
        customButton: {
            fontFamily: 'monospace',
            background: '#202a35',
            color: '#e6d7e6'
        }
    }

    return (
      <Container bg="brand.50" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex direction='column' styles={styles.background} m={3}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Heading fontFamily={"monospace"} color='#e6d7e6' size='md' m={3} p={3} textAlign={"center"}>Frontend Focus, Full-Stack Experience</Heading>
                </div>
            <TechStacks />
                <Box display='flex' justifyContent='space-evenly' p={5}>
                    <Text fontFamily={"monospace"} p={5}color='var(--seasalt)'>Icons by <a href='https://icons8.com/'>Icons8</a></Text>
                    <motion.div whileHover={{ scale: 1.2 }}>
                    <Button style={styles.customButton} m={3} p={2} monospace-label='Download CV'>
                    <a href='src/assets/Resume-Travis-Phillips-Junior-Dev.pdf' >Download CV</a> 
                    </Button>
                    </motion.div>
                </Box>
            </Flex>
         </Container>
    );
};