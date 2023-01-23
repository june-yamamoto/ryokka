import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = () => {
    return (
        <Box px={4} bgColor="yellow.100">
            <Container maxW="container.md">
                <Flex
                    as="header"
                    py="4"
                    justifyContent="space-between"
                    alignItems="center"
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
