import { Header } from "@/components/header/Header";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

const Id = () => {
    return (
        <>
            <Head>
                <title>イベント -旅行時の持ち物管理アプリ-</title>
            </Head>
            <Header />
            <Container padding="10px">イベント名</Container>
        </>
    );
};

export default Id;
