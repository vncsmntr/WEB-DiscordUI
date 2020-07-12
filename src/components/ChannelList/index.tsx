import React from 'react';
import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon /> 
            </Category>
                <ChannelButton channelName="chat-livre" />
                <ChannelButton channelName="Trabalho" />
                <ChannelButton channelName="Diversão" />
                <ChannelButton channelName="Variados" />
                <ChannelButton channelName="Off-Topic" />
        </Container>
    )
};

export default ChannelList;