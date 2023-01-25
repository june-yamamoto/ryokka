import Head from "next/head";
import { Flex, Text } from "@chakra-ui/react";
import { HomePage } from "@/components/home/HomePage";

const Home = () => {
    return (
        <>
            <Head>
                <title>旅荷 -旅行時の持ち物管理アプリ-</title>
            </Head>
            <HomePage />
        </>
    );
}

export default Home;