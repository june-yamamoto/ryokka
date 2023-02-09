import { Header } from "@/components/header/Header";
import Head from "next/head";
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    Input,
    List,
    ListItem,
} from "@chakra-ui/react";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { StoredEvents } from "@/types/StoredEvent";

const Id = () => {
    const router = useRouter();
    const { id } = router.query;
    const [events, setEvents] = useLocalStorage<StoredEvents>("events", {});
    const [newItemName, setNewItemName] = useState("");

    const event = useMemo(() => {
        if (!id) return undefined;

        return events[id as string];
    }, [events, id]);

    const handleClickSubmit = useCallback(() => {
        if (!event) return;
        if (!(typeof id === "string")) return;
        // 対象のイベントにitem(荷物)を1個追加する
        const newEvent = {
            name: event.name,
            date: event.date,
            item: [...event.item, { name: newItemName, checked: false }],
        };
        setEvents({ ...events, [id]: newEvent });
        setNewItemName("");
    }, [event, events, id, newItemName, setEvents]);

    const handleClickCheckbox = useCallback(
        (name: string) => {
            if (!event) return;
            if (!(typeof id === "string")) return;

            // 対象のitemのチェック状態を変更する
            const newEvent = {
                name: event.name,
                date: event.date,
                item: [
                    ...event.item.map((_item) => {
                        if (_item.name === name) {
                            return {
                                name: _item.name,
                                checked: !_item.checked,
                            };
                        }
                        return _item;
                    }),
                ],
            };
            setEvents({ ...events, [id]: newEvent });
        },
        [event, events, id, setEvents]
    );

    const availableItem = useMemo(() => {
        if (!event) return false;
        if (newItemName === "") return false;

        return !event.item.some((_item) => _item.name === newItemName);
    }, [event, newItemName]);

    console.log({ event });

    if (!event) return null;

    return (
        <>
            <Head>
                <title>イベント -旅行時の持ち物管理アプリ-</title>
            </Head>
            <Header />
            <Container padding="10px">
                イベント名
                {` ${event?.name}` || ""}
                <br />
                {event.date}
                <List
                    spacing={3}
                    border="solid 1px"
                    padding="8px"
                    margin="8px"
                    borderRadius="10px"
                >
                    {event.item.map((_item) => {
                        return (
                            <div key={_item.name}>
                                <input
                                    type="checkbox"
                                    onClick={() =>
                                        handleClickCheckbox(_item.name)
                                    }
                                    checked={_item.checked}
                                />
                                <span style={{ margin: "8px" }}>
                                    {_item.name}
                                </span>
                            </div>
                        );
                    })}
                </List>
                <FormControl>
                    <Input
                        name="newItem"
                        type="string"
                        value={newItemName}
                        placeholder="持ち物を追加"
                        margin="8px"
                        onChange={(event) => setNewItemName(event.target.value)}
                    />
                    <Button
                        width="100%"
                        margin="20px 0"
                        type="submit"
                        disabled={availableItem}
                        onClick={handleClickSubmit}
                        backgroundColor="brand.50"
                    >
                        荷物を追加
                    </Button>
                </FormControl>
            </Container>
        </>
    );
};

export default Id;
