import React from 'react'

import { Wrapper, Content, Topo, Titulo, Data, Descricao } from './style'

const EventBoard = ({ nomeEvento, data, descricao }) => {
    return (
        <Wrapper>
            <Content>
                <Topo>
                    <Titulo>{nomeEvento}</Titulo>
                    <Data>{data}</Data>
                    <Descricao>{descricao}</Descricao>
                </Topo>
            </Content>
        </Wrapper>
    )
} 
export default EventBoard;