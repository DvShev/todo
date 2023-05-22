import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "@/store/reducer";
import styled from "styled-components";
import { TasksState } from "@/store/reducer";

const WrappInput = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  border-radius: 4px;
  height: 30px;
  padding: 5px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  cursor: pointer;
  width: 40px;
  height: 30px;
  background: #fff;
`;
const Informaion = styled.div`
  margin-left: 30px;
`;
export const AddBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: TasksState) => state.tasks);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddValue = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTask({ task: inputValue }));
      setInputValue("");
    }
  };

  return (
    <WrappInput>
      <Input
        type="text"
        placeholder="type task"
        value={inputValue}
        onChange={handleChange}
      />
      <Button onClick={handleAddValue}>Add</Button>
      <Informaion>count: {tasks.length}</Informaion>
    </WrappInput>
  );
};
