import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Text, Heading, Button, Box, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

export default function Summary(props) {
  
  var actual = JSON.parse(atob(props.cont));
  console.log(actual);
  return (
    <Box>
      <Head>
        <title>Summary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom={10}
      >
        <Box>
          <Heading as="h3">Summary of items</Heading>
          <br/>
          {console.log("this")}
          {console.log(actual)}
          {actual.map((prop, index) => (
          //   <div>
          //   <strong>{prop.itemname}</strong>
          //   <p>{prop.address}</p>
          //   <p>{prop.latitude}</p>
          //   <p>{prop.longitude}</p>
          // </div>
            prop.website ? 
            (<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='6'>
              <p>Item {index + 1}</p>
              <strong>{prop.itemname}</strong>
              <hr/>
              <p>{prop.channel_name} by {prop.organisation_name}</p>
              <p>({prop.address})</p>
              <hr/>
              <p><b>Items Accepted: </b> {prop.categories_accepted}</p>
              <p><b>Operating Hours: </b>{prop.operating_hours}</p>
              <p><b>Condition: </b>{prop.type}</p>
              <p><b>Contact: </b>{prop.contact}</p>
              <p>({prop.distance}km from your location)</p>
              <a href={prop.website}>{prop.website}</a><br/>
              <b>+5 points</b>
            </Box>) : 
            (<Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='6'>
              <p>Item {index + 1}</p>
              <strong>{prop.itemname}</strong>
              <hr/>
              <p>Recycling Bin @ Blk {prop.block_number}, S{prop.postal}</p>
              {/* <p>{prop.latitude}</p>
              <p>{prop.longitude}</p> */}
              <p>({prop.distance} km from your location)</p>
              <b>+2 points</b>
              <br/>

            </Box>)
          ))}
        </Box>
      </Flex>
    </Box>
  );
}
export async function getServerSideProps(context) {
  console.log(context.query.code);
  return {
    props: { cont: context.query.code }, // will be passed to the page component as props
  };
}