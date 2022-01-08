import React from "react";
import { Button, Center, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  goBackButton?: boolean;
}

const Header = ({ goBackButton = false }: HeaderProps): React.ReactElement => (
  <Grid
    templateColumns='repeat(12, 1fr)'
    gap={4}
    maxWidth={1160}
    py={7}
    px={[4, null, null, 0]}
    mx="auto"
  >
    {goBackButton && (
      <GridItem colSpan={2}>
        <Link href="/">
          <Button rounded="50%" h="10" w="8" colorScheme="telegram" variant="ghost">
            <Icon as={FiChevronLeft} h="6" w="6" color="gray.900"/>
          </Button>
        </Link>
      </GridItem>
    )}
    <GridItem colSpan={8} colStart={3}>
      <Center>
        <Image src="/assets/logo.svg" alt="WorldTrip"/>
      </Center>
    </GridItem>
  </Grid>
);

export default Header;
