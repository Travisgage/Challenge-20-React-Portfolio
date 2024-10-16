import { extendTheme } from '@chakra-ui/react';
import background from '../assets/images/background.png';
import { Global } from "@emotion/react";

const theme = extendTheme({
    colors: {
        brand: {
            50: "#ccafcd", 
            200: "#9a8fab", 
            300: "#e6d7e6", 
            500: "#3f3b58", 
            800: "#202a35", 
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
