import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
//import jsIcon from '..assets/icons8-javascript.svg';
//import reactIcon from '..assets/icons8-react.svg';
//import nodeIcon from '..assets/icons8-node-js.svg';
//import mongoDBIcon from '..assets/icons8-mongo-db-48.png';
//import postgreSQLIcon from '..assets/icons8-postgresql.svg';
//import gitIcon from '..assets/icons8-git-logo.svg';


export default function TechStacks() {
    // useState to display names of hovered icons
    const [skill, setSkill] = useState('');
    // Icons Array
    const icons = [
        {
            iconTitle: 'jsIcon',
            imageSrc: 'src/assets/images/icons8-javascript.svg',
            iconDescription: 'JavaScript icon',
        },
        {
            iconTitle: 'reactIcon',
            imageSrc: 'src/assets/images/icons8-react.svg',
            iconDescription: 'React icon',
        },
        {
            iconTitle: 'nodeIcon',
            imageSrc: 'src/assets/images/icons8-node-js.svg',
            iconDescription: 'Node.js icon',
        },
        {
            iconTitle: 'mongoDBIcon',
            imageSrc: 'src/assets/images/icons8-mongo-db-48.png',
            iconDescription: 'MongoDB icon',
        },
        {
            iconTitle: 'postgreSQLIcon',
            imageSrc: 'src/assets/images/icons8-postgresql.svg',
            iconDescription: 'PostgreSQL icon',
        },
        {
            iconTitle: 'gitIcon',
            imageSrc: 'src/assets/images/icons8-git-logo.svg',
            iconDescription: 'Git icon',
        },
    ];

    // Icon animation
    const listVariants = {
        hidden: {
          opacity: 0,
          x: 20,
        },
        visible: {
          fontfamily: 'monospace',
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4, 
          },
        },
      };
      
      const containerVariants = {
        visible: {
          transition: {
            staggerChildren: 0.2, 
          },
        },
      };

      const skillHolder = {
            textBox: {
                fontfamily: 'monospace',
                color: '#202a35',
                minHeight: '50px',
                display: 'flex',
                justifyContent: 'center',
                fontSize: "20px",
        }
      }

    return (
        <Box >
            <Text style={skillHolder.textBox}>{skill}</Text>
            <Box >
                <motion.div display='flex' flexDirection='row' initial={'hidden'} animate='visible' variants={containerVariants} >
                    <Box display='flex' justifyContent='space-evenly'>
                    {icons.map((icon) => (
                        <motion.img key={icon.iconTitle} src={icon.imageSrc} variants={listVariants} alt={icon.iconDescription}
                                    whileHover={{ scale: 1.5 }}
                                    onMouseEnter={() => setSkill(icon.iconTitle)}
                                    onMouseLeave={() => setSkill('')}/>
                    ))}
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};