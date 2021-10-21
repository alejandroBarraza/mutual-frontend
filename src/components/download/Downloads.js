import React from 'react';
// import { Button } from '../utils/Button';
import styled from 'styled-components';
import { Button } from '../utils/Button';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    background-color: red;
    width: 100%;

    transition: box-shadow 0.2s ease;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;
const ImageContainer = styled.div`
    flex: 1 0 50%;
    img {
        overflow: hidden;
        min-height: 100%;
        min-width: 100%;
        border-radius: 20px 0 0 20px;
        object-fit: cover;
        object-position: 50% 50%;
        filter: brightness(70%);
        transition: filter 0.5s ease-in-out;

        &:hover {
            filter: none;
        }
    }
`;
const TextContainer = styled.div`
    flex: 1 0 50%;
    background-color: #ffffff;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
`;

export const Downloads = () => {
    return (
        <div className='container'>
            <CardContainer>
                <ImageContainer>
                    <img
                        src='https://image.freepik.com/vector-gratis/fondo-ilustracion-criaturas-coloridas-espeluznantes_516247-10.jpg'
                        alt='foto-random'
                    />
                </ImageContainer>
                <TextContainer>
                    <h2>holac como estas</h2>
                    <p>lorem5</p>
                    <Button mutual>Descargar</Button>
                </TextContainer>
            </CardContainer>
            <CardContainer>
                <ImageContainer>
                    <img
                        src='https://cdn.pixabay.com/photo/2021/10/02/18/49/square-6676128_960_720.jpg'
                        alt='foto-random2'
                    />
                </ImageContainer>
                <TextContainer>
                    <h2>holac como estas</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        voluptates dicta porro nobis repudiandae odio illum nam amet fuga, deleniti
                        voluptate asperiores. Perferendis, sit consectetur.
                    </p>
                    <Button mutual>Descargar</Button>
                </TextContainer>
            </CardContainer>
        </div>
    );
};
