import React, { useState } from 'react'
import { Wrapper, Content, LabelInput, Input, InputDescricao, Button } from './style'

const FormAddEvent = () => {

    const [ nomeEvento, setNomeEvento ] = useState('')
    const [ data, setData ] = useState('')
    const [ descricao, setDescricao ] = useState('')
    const [ evento, setEvento ] = useState([])

    const HandleEvento = () => {
        setEvento([
            ...evento,
            {none : nomeEvento, data : data, descricao : descricao}
        ])
        setDescricao('')
        setNomeEvento('')
        setData('')
    }


    return (
        <Wrapper>
            <Content>
                <LabelInput display="block">Nome Evento: </LabelInput>
                <Input value={nomeEvento} type="text" placeholder="Olá" onChange={(e) => setNomeEvento(e.target.value)} />
                <LabelInput display="block">Data: </LabelInput>
                <Input value={data} type="date" placeholder="Olá" onChange={(e) => setData(e.target.value)} />
                <LabelInput display="block">Descrição: </LabelInput>
                <InputDescricao value={descricao} type="text" placeholder="Olá" onChange={(e) => setDescricao(e.target.value)} />
                <Button onClick={HandleEvento}>ADD</Button>
            </Content>
        </Wrapper>
    )
}
export default FormAddEvent;