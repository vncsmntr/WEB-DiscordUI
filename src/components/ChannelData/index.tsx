import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect (() => {
        const div = messagesRef.current;

        if (div){
            div.scrollTop = div.scrollHeight;
        }

    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                
                {Array.from(Array(150).keys()).map((n) => (
                <ChannelMessage
                    key={n}
                    author="Vinicius Monteiro"
                    date="12/07/20200"
                    content="Tem que voltar aqui, para ver isso depois"
                />
                ))}


                <ChannelMessage
                    author="Diego Fernandes"
                    date="12/07/20200"
                    content={
                        <>
                            <Mention>@Vinicius Monteiro</Mention> me carrega no COD e CS de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;