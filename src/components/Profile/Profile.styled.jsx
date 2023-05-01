import styled from "@emotion/styled"

export const Block = styled.div`
background-color: lightgray;
padding: 50px;
margin: 50px;
text-align: center;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

`;

export const ProfileItem = styled.li`
margin-right: 0px;
padding: 10px;
border: 1px solid black;
`;

export const ProfileList = styled.ul`
padding-inline-start: 0;
display: flex;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

`;


export const ProfileName = styled.p`
font-weight: bold;
text-transform: uppercase;

`;
export const ProfileImg = styled.img`
font-weight: bold;
text-transform: uppercase;
border-radius: 50px;
border: 1px solid black;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;