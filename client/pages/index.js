import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import { Text, Heading, Button, Box, Flex, Image, Center } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function Home() {
  const [Loader, setLoader] = useState(false);
  const [Loader2, setLoader2] = useState(false);
  const [Loader3, setLoader3] = useState(false);
  return (
    <>
      <Head>
        <title>Home | RecycleGoWhere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@700;800&display=swap" rel="stylesheet"></link>
      </Head>

        {/* Hero */}
        <Flex flexDirection="row" justifyContent="center" alignItems="center" marginBottom={10}>
          <Box
            marginLeft="20px"
          >
            <Heading 
              as="h1" fontFamily={'Maven Pro', "sans-serif"}>Pulau Semakau will be completely filled by 2035.</Heading>
            <br />
            <Heading as="h2" fontSize="lg">Let’s do what we can to stop this!</Heading>
            <br />
            <Link href="/recycle-and-reuse" passHref>
            {Loader2 ? (<Button colorScheme="teal" variant="outline" mt={3} isLoading={true} loadingText='Loading'></Button>):(<Button as="a" rightIcon={<ArrowForwardIcon />} colorScheme="teal" onClick={() => setLoader2(true)}>I want to help!</Button>)}
            </Link>
            <br/>
            <Link href="/blog" passHref>
            {Loader ? (<Button colorScheme="gray" variant="outline" mt={3} isLoading={true} loadingText='Loading'></Button>) : (<Button as="a" rightIcon={<ArrowBackIcon />} colorScheme="gray" variant="outline" mt={3} onClick={() => setLoader(true)}>I want to learn!</Button>)}
            </Link>
          </Box>

          <Box>
            <Image
              src="/unclesemakau_singlet.png"
              alt="Uncle Semakau in a Singlet"
              boxSize="500px"
              objectFit={"contain"}
            />
          </Box>
        </Flex>

        {/* What's the Issue */}
        <Box
          display="flex"
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden' 
          marginY="20px"
        >
          <Box
            flex="1"
          >
              <Image
                src="/unclesemakau.png"
                alt="Uncle Semakau in a Singlet"
                boxSize="200px"
                objectFit="contain"
                marginTop="20px"
                marginLeft="28%"
              />
          </Box>

          <Box
            flex="3"
            padding="50px"
          >
            <Heading as="h1">What&apos;s the Issue?</Heading>
            <Text mt={4}>
              By 2035, Pulau Semakau will be filled. In 20 years, plastic waste will triple from the current amount.
              Yet, Singapore’s domestic recycling rate has fallen from 17% in 2019 to 13% in 2020.
              Although 6 in 10 households recycle regularly, the lack of proper practice in handling rubbish has resulted in ineffective recycling processes.
            </Text>
          </Box>
        </Box>

        {/* About RGW */}
        <Box
          display="flex"
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden' 
          marginY="20px"
        >
          <Box
            flex="1"
          >
              <Image
                src="/unclesemakau.png"
                alt="Uncle Semakau in a Singlet"
                boxSize="200px"
                objectFit="contain"
                marginTop="10px"
                marginLeft="28%"
              />
          </Box>
          <Box
            flex="3"
            padding="50px"
          >
            <Heading as="h1">About Recycle Go Where</Heading>
            <Text>

            </Text>
            <Link href="/guide" passHref>
            {Loader3 ? (<Button colorScheme="gray" variant="outline" mt={3} isLoading={true} loadingText='Loading'></Button>):(<Button mt={4} onClick={()=>{setLoader3(true)}}>About Us</Button>)}
            </Link>
          </Box>
          
        </Box>

        {/* Our Team */}
        <Box
          display="flex"
          borderWidth='1px' 
          borderRadius='lg' 
          overflow='hidden' 
          marginY="20px"
        >
          <Box
            flex="1"
          >
              <Image
                src="/unclesemakau.png"
                alt="Uncle Semakau in a Singlet"
                boxSize="200px"
                objectFit="contain"
                marginTop="10px"
                marginLeft="28%"
              />
          </Box>

          <Box
            flex="3"
            padding="50px"
          >
            <Heading as="h1">Our Team</Heading>
            <Text>

            </Text>

            <Button isDisabled={true} mt={4}>Team Page</Button>
          </Box>
        </Box>
    </ >

  )
}
