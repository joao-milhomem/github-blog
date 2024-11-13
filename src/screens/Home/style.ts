import styled from 'styled-components'

export const PostsComponent = styled.main`
    max-width: 864px;
    width: 100%;
    padding-bottom: 4rem;
    margin: 0 auto ;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: .75rem;

        h2{
            color: ${(props) => props.theme.LIGHT_4};
            font-size: 1.25rem;
        }

        small {
            font-size: .875rem;
            color: ${(props) => props.theme.LIGHT_1};
        }
    }
   
`

export const PostSearchForm = styled.form`
    margin-bottom: 3rem;

    input[type="text"] {
        width: 100%;
        padding: .75rem 1rem;
        
        border-radius: 6px;
        background-color: ${(props) => props.theme.DARK_1};

        color: ${(props) => props.theme.LIGHT_5};
        
        &::placeholder {
            color: ${(props) => props.theme.LIGHT_1};
        }
        
        &:focus {
            outline: 1px solid ${(props) => props.theme.PRIMARY};           
        } 
    }
`

export const PostsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 2rem;
    list-style-type: none;

    li {
        display: flex;
    }
`
