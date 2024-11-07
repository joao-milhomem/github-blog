import styled from 'styled-components'

export const Profile = styled.section`
    max-width: 864px;
    width: 100%;
    margin-inline: auto;
    margin-block: -80px 72px;
    padding: 2rem 2.5rem;

    display: flex;
    align-items: center;
    gap: 2rem;

    background-color: ${(props) => props.theme.DARK_3};
    border-radius: 10px;
    
    >img{
        width: 148px;
        height: 148;
        border-radius: 8px;
        object-fit: cover;
    }
`

export const ProfileContent = styled.div`

    header  {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 8px;
    }

    header > strong {
        color: ${(props) => props.theme.LIGHT_5};

        font-size: 1.5rem;
        font-weight: 700;
        line-height: 130%;
    }

    header > a {
        color: ${(props) => props.theme.PRIMARY};
        font-size: .75rem;
        font-weight: 700;
        
        text-transform: uppercase;

        display: flex;
        gap: 8px;

        border-bottom: 2px solid transparent;

        &:hover {
            border-bottom: 2px solid ${(props) => props.theme.PRIMARY};
        }
    }

    .about-me {
        margin-bottom: 1.5rem;
        line-height: 160%;
    }

    .badges {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        color: ${(props) => props.theme.LIGHT_4};
        line-height: 160%;

        > span {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`

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

export const Post = styled.a`
    display: block;
    width: 100%;
    max-width: 416px;
    padding: 2rem;
    border-radius: 10px;
    
    border: 2px solid transparent;
    background-color: ${(props) => props.theme.DARK_4};

    &:hover {
        outline: 2px solid ${(props) => props.theme.LIGHT_1};
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
