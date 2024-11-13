import styled from 'styled-components'

export const ProfileComponent = styled.article`
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
