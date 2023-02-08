import { Header } from "@/components/header/Header";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { StoredEvents } from "@/types/StoredEvent";

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [events] = useLocalStorage<StoredEvents>("events", {});

    const event = useMemo(() => { 
        if (!id) return undefined;
        return events[id as string];
    }, [events]);

    return (
        <>
            <Head>
                <title>イベント -旅行時の持ち物管理アプリ-</title>
            </Head>
            <Header />
            <Container padding="10px">イベント名{event?.name || ''}</Container>
        </>
    );
};

export default Id;
