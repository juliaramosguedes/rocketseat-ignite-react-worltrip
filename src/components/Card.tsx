import React from "react";
import { Box, Flex, FlexProps, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

interface CardProps extends FlexProps {
  name: string;
  image: string;
}

const Card = ({ name, image, ...rest }: CardProps): React.ReactElement => {
  const isMobile = useBreakpointValue([true, null, null, false]);

  return (
    <Flex
      w="fit-content"
      direction={["row", null, null, "column"]}
      align="center"
      justify="space-between"
      px={4}
      {...rest}
    >
      {isMobile ? (
        <Box
          h="8px"
          w="8px"
          bg="orange.300"
          borderRadius="50%"
          mr="2"
        />
      ) : (
        <Image
          display={["none", null, null, "block"]}
          src={image}
          alt={name}
          width="85"
          height="85"
        />
      )}
      <Heading
        fontWeight={["medium", null, null, "semibold"]}
        fontSize={["lg", null, null, "2xl"]}
        mt={[0, null, null, 6]}
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default Card;
