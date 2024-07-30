import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #121212;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #363636;
    bottom: 0;
    position: fixed;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 150px;
    }

    @media screen and (max-width: 480px) {
        height: 100px;
    }
`



