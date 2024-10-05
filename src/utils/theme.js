import { extendTheme } from '@chakra-ui/react';
import background from '../assets/images/background.png';
import { Global } from "@emotion/react";
import fonts from '../assets/vertopal.com_Mitashi-Tech.woff';

const theme = extendTheme({
    colors: {
        brand: {
            50: "#ccafcd", //pale lavender
            200: "#9a8fab", //light lavender
            300: "#e6d7e6", //off-white
            500: "#3f3b58", //medium purple
            800: "#202a35", //dark purple
        }
    },
    styles: {
      global: (props) => ({
        'html, body': {
            bg: 'brand.500', 
            color: 'brand.800',

             backgroundImage: `url(${background})`,
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
             height: '100vh',
             width: '100vw',
             overflowX: 'hidden',
            },
        }),
      },
});

export default theme