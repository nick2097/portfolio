import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser';
import {ElementRef, useRef} from "react";

export const Contacts = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs.sendForm('service_ubarp0e', 'template_8h4y2um', form.current, 'NWwZh9gks91E6Lwg2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={'user_name'}/>
                    <S.Field required placeholder={"subject"} name={'subject'}/>
                    <S.Field required placeholder={"email"} name={'email'}/>
                    <S.Field required  placeholder={"message"} as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>

        </S.Contacts>
    );
};

