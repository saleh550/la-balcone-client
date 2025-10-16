import React from "react";


import LoginForm from "./components/LoginForm";
import Title from "../../../components/customs/Title";
import MenuButton from "../../../components/customs/buttons/MenuButton";

export const LoginPage: React.FC = () => {
    return (
        <>
            <MenuButton />
            <div
                data-aos="flip-left"
                className="isolate bg-white px-6 py-20 sm:py-32 lg:px-8  rounded-lg"
            >
                <Title title="LOGIN" />
                <LoginForm />
            </div>
        </>
    );
};