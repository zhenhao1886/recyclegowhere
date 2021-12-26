import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";
import Head from 'next/head';


const theme = extendTheme({
  components: {
    Steps,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"
        />
        <link
          href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Container
        overflow="hidden"
        maxW="container.xl"
        minH="80vh"
        paddingTop={10}
        paddingBottom={10}
      >
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;