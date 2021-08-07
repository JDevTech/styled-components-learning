import styled from 'styled-components'

const InputText = styled.input.attrs(() => ({
    autoComplete: 'off'
}))`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    font-family: 'Open Sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`

export default InputText