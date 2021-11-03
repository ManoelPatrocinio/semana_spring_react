// @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        --color-primary: #ff8400;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    html,
    body {
        height: 100%;
        font-family: "Ubuntu", sans-serif;
        font-size: 1rem;
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
    }
    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.titleColor};;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
         flex: 1 0 auto;
    }

    .footer {
        flex-shrink: 0;
        text-align: center;
        background: ${(props) => props.theme.colors.background} !important;
        border-top: 1px solid #cecece;
        color: ${(props) => props.theme.colors.text} !important;

    }

    .bg-primary {
        background-color: var(--color-primary) !important;
    }

    .text-primary {
        color: ${(props) => props.theme.colors.titleColor} !important;
    }

    .text-secondary{
        color: ${(props) => props.theme.colors.text} !important;

    }
    .table,.table-striped > tbody > tr:nth-of-type(odd) > *{
        color: ${(props) => props.theme.colors.text} !important;

    }

`;
