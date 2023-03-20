import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 20px;
  gap: 35px;
  align-items: center;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 350px;
  background-color: white;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  outline: 1px solid black;
  padding: 10px;
`;
