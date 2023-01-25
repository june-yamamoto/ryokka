import {
    ChakraBaseProvider,
    ChakraProvider,
    extendTheme,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";

export const theme = extendTheme({
    fonts: {
        heading: `'Hina Mincho', serif`,
        body: `'Noto Sans JP', sans-serif`,
    },
    colors: {
        brand: {
            50: "#FFD20A",
        },
    },
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
