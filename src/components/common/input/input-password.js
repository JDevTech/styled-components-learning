import React, { useState } from 'react'
import styled from 'styled-components'
import InputText from './input-text'

const PasswordInput = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    return(
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled revealPassword={showPassword} {...props} />
                <ToggleButton onClick={() => setShowPassword(s => !s)}>
                    {showPassword ? 'Hide' : 'Show'}
                </ToggleButton>
            </PasswordInputWrapper>
        </>
    )
}

const PasswordInputWrapper = styled.div`
    display: flex;
    ~div{
        margin-bottom: 8px;
    }
`;

const ToggleButton = styled.div`
    height: 40px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 0.9em;
    display: flex;
    padding: 8px;
    border-left: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    color: black;
`;

const PasswordInputStyled = styled(InputText).attrs((props) => ({
    type: props.revealPassword ? 'text' :'password',
    placeholder: 'Password'
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

export default PasswordInput