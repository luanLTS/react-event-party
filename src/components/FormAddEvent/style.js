import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`

export const Content = styled.div`
    max-width: 1040px;
    margin: 50px auto 0px;
`

export const LabelInput = styled.label`
    font-size: 20px;
    font-weight: bold;
    display: ${(props) => props.display == 'block' ? 'block' : 'inline' };
    padding: 20px 0px;
`

export const Input = styled.input`
    outline: none;
    width: 500px;
    height: 40px;
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid #000;
`

export const InputDescricao = styled.textarea`
    outline: none;
    width: 500px;
    height: 150px;
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid #000;
`

export const Button = styled.button`
    display: inline;
    outline: none;
    margin: 20px 0px;
    width: 100px;
    height: 50px;
    border: 0px;
    border-radius: 25px;
    background-color: #96c5fd;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
`