import React from 'react';
import { Flex, Button, Heading, Text, CardBody, Card, CardFooter, Stack, Image } from '@chakra-ui/react';
import strictlyballroom from '../assets/images/strictly-ballroom.jpg';
import taskboard from '../assets/images/task-board.png';
import texteditor from '../assets/images/text-editor.png';
import notetaker from '../assets/images/note-taker.png';
import bestblog from '../assets/images/best-blog-ever.png';
import hsb from '../assets/images/hannah-smith-ballroom.jpg'; 


export default function Portfolio() {
  return (
    <Flex justifyContent="center" flexDirection="column" m={{base: 2, md: 6}} p={{base: 4, md: 6}}>
      <Card 
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={strictlyballroom}
          alt='Strictly Ballroom'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Strictly Ballroom</Heading>
            <Text fontFamily={'monospace'} py='2'>
              A globally recognized top competition dance studio.
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/strictly-ballroom" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            <Button as="a" href="https://strictly-ballroom.onrender.com/" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={hsb}
          alt='Hannah Smith Ballroom'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Hannah Smith Ballroom</Heading>
            <Text fontFamily={'monospace'} py='2'>
              A refined dance studio specializing in social dance and wedding first dances.
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/hannahpsmith/hannah-smith-ballroom" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            {/* hsb will be deployed soon */}
            <Button as="a" href="https://hannahsmithballroom.com" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={texteditor}
          alt='Incredible Text Editor'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Incredible Text Editor</Heading>
            <Text fontFamily={'monospace'} py='2'>
              (Not) just another text editor
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/Travisgage/19-NOT-just-another-text-editor" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            <Button as="a" href="https://one9-not-just-another-text-editor-10.onrender.com/" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={notetaker}
          alt='Note Taker'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Note Taker</Heading>
            <Text fontFamily={'monospace'} py='2'>
              Note taker for, you guess it - taking notes
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/Travisgage/FSF-Challenge-11-Note-Taker" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            <Button as="a" href="https://note-taker-z0v0.onrender.com/" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={bestblog}
          alt='Best Blog Ever'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Best Blog Ever</Heading>
            <Text fontFamily={'monospace'} py='2'>
              The best blog you've ever seen, probably ... maybe?
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/Travisgage/Challenge-4-Blog" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            <Button as="a" href="https://travisgage.github.io/Challenge-4-Blog/" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        m="3"
        bgColor={'#202a35'}
        color={'#e6d7e6'}
        border={'none'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={taskboard}
          alt='Task Board'
        />
        <Stack>
          <CardBody>
            <Heading fontFamily={'monospace'} size='md'>Task Board</Heading>
            <Text fontFamily={'monospace'} py='2'>
              Simple kanban board for project organization
            </Text>
          </CardBody>

          <CardFooter>
            <Button as="a" href="https://github.com/Travisgage/Challenge-5-Kanban-Board" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Github
            </Button>
            <Button as="a" href="https://travisgage.github.io/Challenge-5-Kanban-Board/" fontFamily={'monospace'} variant='solid' bgColor={'#ccafcd'} m={2}>
              Application
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}