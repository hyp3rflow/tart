import styled from 'styled-components';

const Card = styled.div`
  background-color: #495057;
  padding: 14px;
  border-radius: 4px;

  box-shadow: rgba(20, 20, 20, 4%) 2px 7px 16px 0px;

  & + & {
    margin-top: 14px;
  }
`;

export default Card;
