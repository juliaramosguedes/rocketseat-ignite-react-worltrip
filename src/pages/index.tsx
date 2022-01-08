import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner, Card, Carousel, Header } from "../components";
import api from "../services/api";
import Head from "next/head";

interface Continent {
  id: number;
  name: string;
  description: string;
  carrouselImage: string;
}

interface HomeProps {
  continents: Continent[];
}

const Home = ({ continents }: HomeProps): React.ReactElement => (
  <>
    <Head>
      <title>Worldtrip</title>
    </Head>
    <Header goBackButton/>
    <Banner/>
    <Flex
      maxWidth={1160}
      mx="auto"
      mt={[9, null, null, 20]}
      align="center"
      justify={["center", null, "space-between"]}
      wrap="wrap"
      px={[4, null, null, 0]}
    >
      <Card name="vida noturna" image="/assets/cocktail.svg" mt={[6, null, null, 0]}/>
      <Card name="praia" image="/assets/surf.svg" mt={[6, null, null, 0]}/>
      <Card name="moderno" image="/assets/building.svg" mt={[6, null, null, 0]}/>
      <Card name="clássico" image="/assets/museum.svg" mt={[6, null, null, 0]}/>
      <Card name="e mais..." image="/assets/earth.svg" ml={[0, 30]} mt={[6, null, null, 0]}/>
    </Flex>
    <Box w={["60px", null, null, "90px"]} h="2px" bg="gray.900" mx="auto" mt={[9, null, null, 20]}/>
    <Text
      textAlign="center"
      fontSize={["xl", null, null, "4xl"]}
      color="gray.900"
      fontWeight="medium"
      mx="auto"
      my="6"
    >
      Vamos nessa? <br/>
      Então escolha seu continente
    </Text>
    <Box maxWidth={1240} px={[0, null, null, 4]} mx="auto" mb={10}>
      <Carousel data={continents}/>
    </Box>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  return {
    props: {
      continents: response.data,
    },
  };
};
