import styled from 'styled-components';

export const TablePageStyle = styled.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 5px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    top: 39px;
    right: 0;
    left: 0;
    background: #fff;

    div:nth-child(2) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    a {
        padding: 6px 10px;
        margin: 0 5px;
        border-radius: 2px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #098232;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        -webkit-transition: .5s ease;
        -o-transition: .5s ease;
        transition: .5s ease;

        &:hover {
            -webkit-filter: brightness(80%);
            filter: brightness(80%);
        }

        span::after {
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
        }

        &:nth-child(1) span::after { content: "\\f1f8"; }
        &:nth-child(2) span::after { content: "\\f304"; }
    }

    @media only screen and (max-width: 540px) {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
`;

export const TablePageFormStyle = styled.div`
    width: 30%;
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    font-family: 'Open Sans', sans-serif;

    form {
        width: 100%;
        padding: 5px 0;
        display: flex;
        border-right: 1px solid #c0c0c0;

        input {
            width: 100%;
            border: none;
            font-family: 'Open Sans', sans-serif;
            font-size: 12px;
            outline: none;
        }

        button {
            background: #fff;
            border: none;
            outline: none;
        }

        button::after {
            content: "\\f002";
            background-color: #fff;
            color: #666;
            font-size: 12px;
            text-indent: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 50%;
    }

    @media only screen and (max-width: 540px) {
        width: 90%;
        margin: 0 auto 10px auto;
    }
`;

export const FilterStyle = styled.div`
    padding: 7px 6px;
    display: flex;
    align-items: center;
    color: #666;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    transition: .5s ease;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    span::after {
        content: '\\f0b0';
        margin-left: 5px;
        color: #666;
        font-weight: 600;
        font-size: 12px;
        text-indent: 0;
        transition: .5s ease;
    }

    &:hover,
    &:hover span::after { color: #000; }
`;