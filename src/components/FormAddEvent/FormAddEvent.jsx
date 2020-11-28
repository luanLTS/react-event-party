import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Wrapper, Content, LabelInput, Input, InputDescricao, Button } from './style'

const FormAddEvent = () => {
    let history = useHistory()
    const [ nomeEvento, setNomeEvento ] = useState('')
    const [ data, setData ] = useState('')
    const [ descricao, setDescricao ] = useState('')
    const [ evento, setEvento ] = useState([])

    const HandleEvento = () => {
        setEvento([
            ...evento,
            {nome : nomeEvento, data : data, descricao : descricao}
        ])
        setDescricao('')
        setNomeEvento('')
        setData('')
    }

    return (
        <Wrapper>
            <Content>
                <LabelInput display="block">Nome Evento: </LabelInput>
                <Input value={nomeEvento} type="text" onChange={(e) => setNomeEvento(e.target.value)} />
                <LabelInput display="block">Data: </LabelInput>
                <Input value={data} type="date" onChange={(e) => setData(e.target.value)} />
                <LabelInput display="block">Descrição: </LabelInput>
                <InputDescricao value={descricao} type="text" onChange={(e) => setDescricao(e.target.value)} /><br />
                <Button onClick={HandleEvento}>ADD</Button>
                <Button onClick={() => (history.replace('/'))}>VOLTAR</Button>
            </Content>
        </Wrapper>
    )
}
export default FormAddEvent;