import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostComponent = styled(Link)`
    display: block;
    width: 100%;
    max-width: 416px;
    padding: 2rem;
    border-radius: 10px;
    
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.DARK_4};
    cursor: pointer;

    &:hover {
        outline: 2px solid ${(props) => props.theme.LIGHT_1};
        border:2px solid transparent;
    }

    &:focus {
        outline: 2px solid ${(props) => props.theme.LIGHT_1};
    }
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 2rem;

        h3{
            color: ${(props) => props.theme.LIGHT_5};
            font-size: 1.25rem;
            flex: 2;
        }

        time {
            font-size:.875rem;
            color: ${(props) => props.theme.LIGHT_1};
        }
            
    }

    p.content{
        color: ${(props) => props.theme.LIGHT_3};

        font-size: .875rem;
        line-height: 160%;

        
        display: -webkit-box;
        -webkit-box-orient: vertical; 
        -webkit-line-clamp:3;
        overflow: hidden;
    }
`
