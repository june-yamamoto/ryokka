type Item = {
    checked: boolean,
    name: string,
}

export type StoredEvent = {
    name: string,
    date: string,
    item: Item[],
}

export type StoredEvents = {
    [id: string]: StoredEvent;
}