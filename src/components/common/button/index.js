import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const largeStyle = ({large}) => {
    if(large){
        return css`
            padding: 10px;
            font-size: 1.5em;
            border-radius: 5px;
        `
    }else{
        return css`
            padding: 8px;
            font-size: 1em;
            border-radius: 4px;
        `
    }
}

const Button = styled.button`
    color: white;     
    width: 100%;
    border: none;
    display: block;
    box-shadow: none;
    font-weight: bold;
    white-space: none;
    background: ${p => p.secondary ? p.theme.secondaryColor : p.theme.primaryColor} ;

    &:disabled{
        background: #eee;
        color: #666;
    }

    ${largeStyle}
`

Button.propTypes = {
    large: PropTypes.bool,
    secondary: PropTypes.bool
}

export default Button