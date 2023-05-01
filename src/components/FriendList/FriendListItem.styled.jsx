import styled from "@emotion/styled"

export const ListItem = styled.li`
flex-direction: column;
padding: 10px;
text-align: center;
margin: 0 auto;
display: block;
box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
`;
export const FriendStatus = styled.span`
background-color: ${props => (props.isOnline ? 'green' : 'red')};
border-radius: 50%;
width: 10px;
height: 10px;
display: inline-block;
padding: 5px;
margin-right: 10px;
`;