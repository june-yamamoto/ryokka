import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = () => {
    return (
        <Box px={4} bgColor="brand.50">
            <Container maxW="container.md">
                <Flex
                    as="header"
                    py="4"
                    alignItems="center"
                    justifyContent="center"
                >
                    <NextLink href="/" passHref>
                        <Heading
                            as="h1"
                            fontSize="2xl"
                            cursor="pointer"
                            textAlign="center"
                        >
                            旅荷
                        </Heading>
                    </NextLink>
                </Flex>
            </Container>
        </Box>
    );
};
