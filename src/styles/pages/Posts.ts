import styled from 'styled-components';
import { darken} from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${props => props.theme.space[7]};

    ul {
        list-style: none;
        margin: ${props => props.theme.space[10]};
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }
  
`;export const Post = styled.li`
    background: ${props => props.theme.darkMode? 
    props.theme.colors.whiteAlpha[100] :
    props.theme.colors.whiteAlpha[800]
     };
    padding: ${props => props.theme.space[5]};

    h2 {
        margin-bottom: ${props => props.theme.space[2]};
    }
    p {
        margin-bottom: ${props => props.theme.space[2]};
    }

    a {
        background-color: ${props => props.theme.space[2]};
        display: flex;
        margin-inline: 30%;
        padding: ${props => props.theme.space[2]};
        text-align: center;
        justify-content: center;
        background: ${props => props.theme.darkMode?
        props.theme.colors.gray[900]
        : props.theme.colors.secondary
        };

        transition : background 0.2s;       
        &:hover {
        background: ${props => props.theme.darkMode? 
        props.theme.colors.whiteAlpha[200] :
        darken(0.05, props.theme.colors.secondary)
        };

        }
             
        border-radius: 20px;
    }

`;
