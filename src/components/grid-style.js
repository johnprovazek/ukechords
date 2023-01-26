import styled from "styled-components";

export const gridContainer = styled.div`
    background-color: pink;
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
`;

export const gridItem = styled.div`
    background-color: yellow;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
`;




// .grid-container {
//     background-color: pink;
//     display: grid;
//     grid-template-columns: auto auto auto;
//     padding: 10px;
// }

// .grid-item {
//     background-color: yellow;
//     border: 1px solid rgba(0, 0, 0, 0.8);
//     padding: 20px;
//     font-size: 30px;
//     text-align: center;
// }