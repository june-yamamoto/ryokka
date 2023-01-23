import { Flex, Text } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { HomePageBody } from "./HomePageBody";

// トップページのコンポーネント
export const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageBody></HomePageBody>
        </>
    );
};
