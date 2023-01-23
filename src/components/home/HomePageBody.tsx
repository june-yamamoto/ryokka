import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const HomePageBody = () => {
    return (
        <Container maxW="container.md">
            <Flex padding="8px">
                <Heading as="header" fontSize="2xl">
                    ボディです
                </Heading>
            </Flex>
            <Flex padding="8px">
                <Link href="/app/new" passHref>
                    <Button type="button" variant="solid" colorScheme="yellow">
                        はじめるボタン
                    </Button>
                </Link>
            </Flex>
        </Container>
    );
};
