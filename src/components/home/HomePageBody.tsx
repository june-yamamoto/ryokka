import { Box, Button, Container, Text, Heading, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { EventList } from "./EventList";

export const HomePageBody = () => {
    return (
        <Container maxW="container.md">
            <Box padding="8px">
                <Heading >旅行の荷物を管理</Heading>
                <Text>使い方</Text>
                <Text>1. 下の「はじめる」ボタンをクリック</Text>
                <Text>2. イベント名と日程を入力してイベントを作成</Text>
                <Text>3. 作成したイベントに、持ち込む荷物を登録</Text>
                <Text>4. イベントの前日、かばんに詰め込んだ荷物をチェック</Text>
            </Box>
            <Box padding="8px">
                <Link href="/app/new" passHref>
                    <Button
                        type="button"
                        variant="solid"
                        colorScheme="yellow"
                        width="100%"
                    >
                        はじめる
                    </Button>
                </Link>
            </Box>
            <EventList />

            <Box padding="32px 0">
            <Divider />
                <Heading>実装予定</Heading>
                <Text>・既存のイベントを元にしてイベントを作成</Text>
                <Text>・他のユーザーにイベントを共有する</Text>
                <Text>・イベントの持ち物を他のユーザーと共同編集できるようにする</Text>
            </Box>
        </Container>
    );
};
