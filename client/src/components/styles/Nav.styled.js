import styled from 'styled-components';

export const StyledNav = styled.div`
    width: 100%;
    position: fixed;
  top: 0;
    background-color: #282c34;
    overflow: hidden;
    padding: 0px;
    border-bottom: 1px solid #000;
    box-shadow: 0px 1px 1px 1px #999;

    a {
        float: left;
        color: white;
        font-family: sans-serif;
        padding: 20px 10px;
        text-decoration: none;
        text-align: center;
        
        &:hover {
            background-color: #000;
            color: #d67900;
        }
    }

    input {
        width: 30%;
        margin: 15px 20px;
        padding: 5px;
        border-radius: 10px;
    }

    div {
        float: right;
        height: 20px;
        width: 20px;
        background-color: #000;
        color: #fff;
        display: inline;
        padding: 10px;
        margin: 10px 20px 10px 0px;
        border-radius: 50%;
        
        &:hover {
            box-shadow: 0px 0px 6px 1px #d67900;
        }
    }

    span {
        padding-right: 10px;
    }
`