import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Banner = (): React.ReactElement => (
  <Box
    px={[4, null, null, 0]}
    py={[7, null, null, 20]}
    backgroundImage="url('/assets/background.jpg')"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
  >
    <Box
      maxWidth={1160}
      mx={[4, "auto"]}
      position="relative"
    >
      <Heading fontSize={["lg", "xl", "4xl"]} fontWeight="medium" color="gray.50">
        5 Continentes, <br/>
        infinitas possibilidades.
      </Heading>
      <Text fontSize={["sm", "xl"]} color="gray.100" mt={5} maxWidth={525}>
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      <Image
        src="/assets/airplane.png"
        alt="airplane"
        position="absolute"
        bottom={[null, null, null, -120]}
        right="0"
        display={["none", null, null, "block"]}
      />
    </Box>
  </Box>
);

export default Banner;
