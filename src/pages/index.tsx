import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Head>
                <title>旅荷 -旅行時の持ち物管理アプリ-</title>
            </Head>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex
                    direction="column"
                    background="gray.100"
                    p={12}
                    rounded={6}
                ><Text fontSize="2em" color="blue">旅荷</Text></Flex>
            </Flex>
        </>
    );
}
