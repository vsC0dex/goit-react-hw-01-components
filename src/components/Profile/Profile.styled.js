import styled from '@emotion/styled';

export const Card = styled.div`
  margin: 40px auto;
  width: 280px;
  box-shadow: 0px 0px 16px 4px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  text-align: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 25px;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: grey;
`;

export const Location = styled.p`
  color: gray;
  margin: 0;
  padding: 0;
`;

export const Stats = styled.ul`
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 25px;
  margin: 0;
`;

export const Label = styled.span`
  display: block;
  color: gray;
`;

export const Quantity = styled.span`
  display: block;
`;
