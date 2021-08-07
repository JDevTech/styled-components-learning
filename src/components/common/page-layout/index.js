import React from 'react'
import styled from 'styled-components'
import Header from 'components/common/header'

const PageLayoutWrapper = styled.div`
    max-width: 800px;
    margin: 80px auto 0 auto;
    padding: 0 16px;
    box-sizing: border-box;
    font-family: 'Open Sans';

    h1, h2, h3, h4, h5, h6{
        text-align: center;
        font-family: 'Kaushan Script';
    }
`

const PageLayout = ({ children }) => {
    return (
        <>
            <Header/>
            <PageLayoutWrapper>
                {children}
            </PageLayoutWrapper>
        </>
    )
}

export default PageLayout