import { AddBar } from "./AddBar";
import { FilterBar } from "./FilterBar";
import { List } from "./List/List";
import styled from "styled-components";

const Wrapp = styled.div`
  border: 2px solid #000;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  margin: 10px;
  font-size: 30px;
`;
export const Todo = () => {
  return (
    <Wrapp>
      <Title>TODO TASK</Title>
      <AddBar />
      <FilterBar />
      <List />
    </Wrapp>
  );
};
