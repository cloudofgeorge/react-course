import React from "react";
import { Layout } from "../components/common/layout";
import {useInput} from "../hooks";

export const MainPage = () => {
    const [inputValue, onChangeInput] = useInput('');
    return (
        <Layout>
            <div><input onChange={onChangeInput} value={inputValue} /></div>
            {inputValue}
        </Layout>
    );
}
