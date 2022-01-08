import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

import { Header } from "../../components";
import api from "../../services/api";

interface Countries {
  id: number;
  name: string;
  flag: string;
  capital: string;
  image: string;
}

interface ContinentProps {
  continent: {
    name: string;
    text: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    numberOfCity: number;
    bannerImage: string;
    countries: Countries[];
  }
}

const Continent = ({ continent }: ContinentProps): React.ReactElement => {
  const infos = [
    {
    number: continent.numberOfCountries,
    text: "países",
  },{
    number: continent.numberOfLanguages,
    text: "línguas",
  },{
    number: continent.numberOfCity,
    text: "cidades +100",
  },
  ]

  return (
    <>
      <Header goBackButton/>
      <Box
        h={[150, null, null, 500]}
        backgroundImage={`url(${continent.bannerImage})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Flex
          w="100%"
          maxWidth={1160}
          h="100%"
          mx="auto"
          align={["center", null, null, "flex-end"]}
          justify={["center", null, null, "flex-start"]}
          paddingBottom={[0, null, null, 14]}
        >
          <Heading
            color="gray.50"
            fontWeight="semibold"
            fontSize={["3xl", null, null, "5xl"]}
          >
            {continent.name}
          </Heading>
        </Flex>
      </Box>
      <Flex maxWidth={1160} mx="auto" mt={[6, null, null, 20]} align="center" justify="space-between"
            wrap="wrap" px={[4, null, null, 0]}>
        <Text fontSize={["sm", null, null, "2xl"]} maxWidth={[null, null, null, 600]} textAlign="justify">
          {continent.text}
        </Text>
        <Stack direction="row" spacing={[3, null, 8, 10]} align="center" justify="space-between"
               mt={[4, null, null, 0]}>
        {infos.map(({ number, text}) => (
          <Box textAlign={["left", null, null, "center"]}>
            <Heading fontSize={["2xl", null, null, "5xl"]} fontWeight="semibold" color="orange.300">
              {number}
            </Heading>
            <Flex align="center" justify="center">
              <Text fontSize={["lg", null, null, "2xl"]} fontWeight="semibold" color="gray.900">
                {text}
              </Text>
              {text.includes('cidades') &&
              <Tooltip
                label="+ 100 ótimas opções"
                bg="gray.900"
                borderRadius={4}
                placement="bottom-start"
                fontSize="md"
              >
                <span>
                  <Icon as={FiInfo} h={[3, null, null, 4]} w={[3, null, null, 4]} ml={1} color="rgba(153,153,153,0.5)"/>
                </span>
              </Tooltip>
              }
            </Flex>
          </Box>
        ))}
        </Stack>
      </Flex>
      <Box maxWidth={1160} mx="auto" mt={[8, null, null, 20]} mb={9} px={[4, null, null, 0]}>
        <Heading fontSize={["2xl", null, null, "4xl"]} fontWeight="medium" color="gray.900" mb={[5, null, null, 10]}>
          Cidades + 100
        </Heading>
        <SimpleGrid
          justifyItems="center"
          spacing={[6, null, null, 10]}
          minChildWidth="260px"
        >
          {continent?.countries.map(country => (
            <Box
              w="fit-content"
              bg="white"
              borderRadius={4}
              borderWidth="1px"
              borderColor="rgba(255,186,8,0.5)"
            >
              <Image
                w="256px"
                h="173px"
                objectFit="cover"
                objectPosition="center"
                src={country.image}
                borderTopRadius={4}
              />
              <Flex align="center" justify="space-between" mt={5} mb={6} mx={6}>
                <Stack spacing={3}>
                  <Text
                    fontSize="xl"
                    fontFamily="Barlow"
                    fontWeight="semibold"
                    color="gray.900"
                  >
                    {country.capital}
                  </Text>
                  <Text
                    fontSize="md"
                    fontFamily="Barlow"
                    fontWeight="medium"
                    color="gray.800"
                  >
                    {country.name}
                  </Text>
                </Stack>
                <Image
                  h="30px"
                  w="30px"
                  src={country.flag}
                  borderRadius="50%"
                />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const response = await api.get(`/continents/${params.slug}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
    revalidate: 1,
  };
};
