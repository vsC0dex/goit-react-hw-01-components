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

export const Status = styled.span`
  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: inline-block;
  border-radius: 5%;
  width: 80px;
  height: 80px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 30px;
`;
