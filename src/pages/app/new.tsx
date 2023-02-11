import { Header } from "@/components/header/Header";
import { StoredEvent, StoredEvents } from "@/types/StoredEvent";
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { UUID } from "uuidjs";

const New = () => {
    const router = useRouter();
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");

    const [events, setEvents] = useLocalStorage<StoredEvents>("events", {});

    const handleClickSubmit = useCallback(() => {
        const ID = UUID.generate();
        const _events = events;
        setEvents({
            [ID]: { name: eventName, date: eventDate, item: [] },
            ...events,
        });
        router.push(`/app/event/${ID}`);
    }, [events, setEvents, eventName, eventDate, router]);

    return (
        <>
            <Head>
                <title>イベント作成 -旅行時の持ち物管理アプリ-</title>
            </Head>
            <Header />
            <Container padding="10px">
                イベントを作る
                <FormControl>
                    <FormLabel padding="10px 0" />
                    <Input
                        name="eventName"
                        type="string"
                        placeholder="大阪遠征"
                        onChange={(event) =>
                            setEventName(event.target.value)
                        }
                    />
                    <FormLabel padding="10px 0">日時</FormLabel>
                    <Input
                        name="eventDate"
                        type="date"
                        onChange={(event) =>
                            setEventDate(event.target.value)
                        }
                    />
                    <Button
                        width="100%"
                        margin="20px 0"
                        type="submit"
                        onClick={handleClickSubmit}
                        backgroundColor="brand.50"
                    >
                        作成
                    </Button>
                </FormControl>
            </Container>
        </>
    );
};

export default New;
