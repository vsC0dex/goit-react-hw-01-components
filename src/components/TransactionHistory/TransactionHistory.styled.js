import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  width: 50%;
`;

export const Head = styled.thead``;

export const HeadList = styled.tr`
:nth-child(even){background-color: #f2f2f2;`;

export const HeadItems = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #12ccd0;
  color: white;
  height: 20px;
`;

export const Body = styled.tbody``;

export const BodyList = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover,
  &:focus {
    background-color: #b0f4ff5e;
    cursor: default;
  }

  color: ${props => {
    switch (props.type) {
      case 'payment':
        return '#0000a5';
      case 'withdrawal':
        return '#b32f2f';
      case 'invoice':
        return 'black';
      case 'deposit':
        return '#009816';
      default:
        return 'black';
    }
  }};
`;

export const BodyItems = styled.td`
  border: 1px solid #ddd;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  height: 20px;
  text-transform: capitalize;
`;

// border: 1px solid #ddd;
//   background-color: #15d0e5;
//   color: white;

// red #df2424 withraw
// green #009816 payment
// invosdosodf
