import styled from '@emotion/styled';

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
