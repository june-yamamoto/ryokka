import { Button, Container, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { EventList } from "./EventList";

export const HomePageBody = () => {
    return (
        <Container maxW="container.md">
            <Flex padding="8px">
                <Heading>旅行の荷物を管理しよう</Heading>
            </Flex>
            <Flex padding="8px">
                <Button
                    type="button"
                    variant="solid"
                    colorScheme="yellow"
                    width="100%"
                >
                    <Link href="/app/new" passHref>
                        はじめる
                    </Link>
                </Button>
            </Flex>
            <EventList />
        </Container>
    );
};
