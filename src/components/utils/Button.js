import styled from 'styled-components';
// import { css } from 'styled-components';

// buttton options:
// mutual button = green background and with color Font, ex: <button mutual></button>
// white button(default value) = white background with white font color. ex:<button mutual></button>
//FontSize as props or || 12 px as default
export const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: ${({ fontSize }) => fontSize};
    margin: 0.3rem;
    border-radius: 20px;
    border: none;
    background-color: ${({ mutual }) => mutual && 'var(--mutual-color)'};
    transition: background-color 0.5s ease, border 0.5s ease;
    color: ${({ mutual }) => mutual && '#fff'};
    border: 1px solid var(--mutual-color);
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: ${({ mutual }) => mutual && 'var(--mutual-color-hover)'};
        border: 1px solid var(--mutual-color-hover);
    }
`;

Button.defaultProps = {
    fontSize: '12px',
    color: '#5E5E5E',
};
