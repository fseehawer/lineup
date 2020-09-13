import React from 'react'
import styled from 'styled-components'
import checkIconSvg from "./check.svg";

const Container = styled.div`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${(props) => props.theme.text};
`

const CheckIcon = styled.img`
    width: 44px;
    height: auto;
    margin-right: 0.5rem;
`

const Up = styled.span`
    color: #ffc207;
`

export const Heading: React.FC = () => {
    return (
        <Container>
            <CheckIcon src={checkIconSvg} />
            line<Up>up</Up>
        </Container>
    )
}
