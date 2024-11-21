import styled from 'styled-components'

export const PostDetails = styled.section`
    background-color: ${(props) => props.theme.DARK_3};
    border-radius: 10px;
    padding: 2rem;

    max-width: 864px;
    margin: -5.25rem auto 2.5rem;;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 1.25rem;

        a {
            display: flex;
            align-items: center;
            gap: 8px;

            color: ${(props) => props.theme.PRIMARY};
            font-size: .875rem;
            text-decoration: none;
        }
    }

    h1{
        font-size: 1.5rem;
        line-height: 130%;
        margin-bottom: .5rem;
        color: ${(props) => props.theme.LIGHT_5};
    }

    .badges{
        display: flex;
        align-items: center;
        gap: 2rem;

        span, time {
            color: ${(props) => props.theme.LIGHT_2};

            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
`

export const PostMain = styled.main`
    max-width: 832px;
    margin-inline: auto;
    margin-bottom: 2.5rem;

    .content {
        margin-bottom:1.5rem ;

        p {
            line-height: 160%;   

            &:first-child {
                margin-bottom: 1.5rem;
            }
        }
    }
`

export const CodeArea = styled.pre`
    max-width: 832px;
    margin-inline: auto;

    background-color: ${(props) => props.theme.DARK_4};
    border-radius: 10px;
    padding: 1rem;

    code {
        display: block;
        line-height: 160%;
    }
`
