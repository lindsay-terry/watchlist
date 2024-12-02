import { defineConfig, createSystem } from '@chakra-ui/react';

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: 'black',
                secondary: 'white',
            },
            space: {
                4: '1rem',
                8: '2rem',
            },
        },
    },
});

const system = createSystem(config);
export default system;