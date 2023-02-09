import { StoredEvents } from "@/types/StoredEvent";
import { Button, Container, List, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { join } from "path";
import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const EventList = () => {
    const router = useRouter();
    const [events, setEvents] = useLocalStorage<StoredEvents>("events", {});
    // const [wrapperEvents, setWrapperEvents] = useState<StoredEvents>(events);
    const [wrappedEvents, setWrappedEvents] = useState<StoredEvents>();
    useEffect(() => {
        setWrappedEvents(events);
    }, [events]);
    // const wrapperEvents = useMemo(() => {
    //     return events;
    // }, [events]);
    if (!wrappedEvents) return null;

    return (
        <Container>
            作成したイベントの一覧
            <List>
                {Object.entries(wrappedEvents).map((event) => {
                    return (
                        <ListItem key={event[0]}>
                            <Button
                                width="100%"
                                margin="4px"
                                onClick={() =>
                                    router.push(`/app/event/${event[0]}`)
                                }
                            >
                                {event[1].name}
                            </Button>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};
