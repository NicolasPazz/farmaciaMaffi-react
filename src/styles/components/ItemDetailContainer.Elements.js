import styled from "styled-components";
export const MainDetail = styled.main`
    height: 100%;
    width: 100%;
`;
export const DetailCont = styled.section`
    max-width: 1200px;
    margin: 100px auto;
    width: 100%;

    border-radius: 20px;
    height: 100%;
`;
export const ContCard = styled.div`
    color: black;
    width: 100%;

    padding: 36px 0;
    position: relative;
    background-color: white;
    display: flex;
    flex-wrap: row wrap;
    justify-content: space-around;

    @media (max-width: 880px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }
`;

export const CardImage = styled.div`
    max-width: 500px;
    min-width: 290px;
    overflow: hidden;
    margin: 25px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    max-height: 400px;
    display: block;
    object-fit: cover;
`;

export const CardDetail = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
`;

export const CardTitle = styled.div`
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
`;
export const Title = styled.h1`
    font-family: "Poppins";
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 2px;
`;

export const Description = styled.p`
    font-size: 16px;
    font-family: "Poppins";
`;

export const Price = styled.span`
    font-family: "Knewave";
    letter-spacing: 2px;
    font-size: 25px;
`;

export const ContFooterDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
export const ButtonDetail = styled.button`
    padding: 5px;

    border-radius: 10px;
    color: var(--color-primary);
    font-family: "Poppins";
    border: 2px solid white;
    background-color: white;
`;
export const SectionCaract = styled.section`
    width: auto;
    margin: 60px;
    height: auto;
    justify-content: center;
    display: flex;
`;

export const ContenedorCaract = styled.div`
    width: 100%;
    padding: 40px;
`;

export const ContenedorTitulo = styled.div`
    position: relative;
    font-size: 16px;
    font-family: "Knewave";

    &::before {
        content: "";
        width: 100px;
        height: 5px;
        background-color: white;
        position: absolute;
        bottom: -6px;
    }
`;

export const ContenedorIndices = styled.div`
    background-color: white;
    padding: 40px;
    color: white;
    border-radius: 20px;
`;
export const I = styled.i`
    font-weight: 800;
    margin-left: 5px;
    color: var(--color-primary);
`;
export const P = styled.p`
    border-bottom: 2px dashed gray;
    padding-bottom: 5px;
    color: black;
    font-family: "Poppins";
`;

export const ContStock = styled.span`
    font-family: "Poppins";
`;

export const BtnToCart = styled.button`
    padding: 10px;
    font-family: "Poppins";
    border: none;
    border-radius: 10px;
    font-weight: 700;
    transition: 9 ease-in-out;

    &:hover {
        color: var(--color-primary);
        background-color: white;
    }
`;
