import styled, { css } from 'styled-components';


const Heading4 = styled.h4`
    font-size: 1rem;
    
    ${props => 
        props.primary && css`
            font-size: 1.25rem; `}
            `;
export default Heading4;

