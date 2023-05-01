import styled from "@emotion/styled"



export const SectionStatistics = styled.section`
margin-right: 0px;
padding: 10px;
border: 1px solid black;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
background-color: lightgray;
`;

export const TitleStatistics = styled.h2`
text-align: center;
`;

export const ListStatistics = styled.ul`
gap: 20px;
padding-inline-start: 0;
display: flex;


`;

export const ItemStatistics = styled.li`
gap: 20px;
padding-inline-start: 0;
display: flex;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
flex-direction: column;
text-align: center;
`;

export const Label = styled.span`
backgroundColor: ${props => props.color};
padding: 10px;

`;