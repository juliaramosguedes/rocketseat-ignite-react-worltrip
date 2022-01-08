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

const Home = ({ continents }: HomeProps): React.ReactElement => {
  const cards = [
    {
      name: "vida noturna",
      imageUrl: "/assets/cocktail.svg",
    }, {
      name: "praia",
      imageUrl: "/assets/surf.svg",
    }, {
      name: "moderno",
      imageUrl: "/assets/building.svg",
    }, {
      name: "clássico",
      imageUrl: "/assets/museum.svg",
    }, {
      name: "e mais...",
      imageUrl: "/assets/earth.svg",
    },
  ];

  return (
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
        {cards.map(({ name, imageUrl }) => (
          <Card name={name} image={imageUrl} key={name} mt={[6, null, null, 0]}/>
        ))}
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
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");

  return {
    props: {
      continents: response.data,
    },
  };
};
