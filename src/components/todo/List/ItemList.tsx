import React, { FC, ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask, doneTask, Task, editTask } from "@/store/reducer";
import { Input } from "@/components/todo/AddBar";

const Wrapp = styled.li<{ done: boolean }>`
  position: relative;
  border: 2px solid rgb(0, 0, 0);
  padding: 10px;
  width: 350px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CheckBox = styled.input`
  width: 30px;
  height: 30px;
`;
const TextTask = styled.p<{ done: boolean }>`
  font-size: 20;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;
const Btn = styled.button<{ color: string }>`
  font-size: 20;
  background: ${({ color }) => color};
  color: #fff;
  border: 1px solid #000;
  padding: 7px;
  border-radius: 5px;
  margin: 0 5px;
`;
const DateInf = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
`;
const TimeInf = styled.div`
  position: absolute;
  bottom: 40px;
  left: 5px;
`;
const BtnWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemList: FC<{ task: Task }> = ({ task }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(task.text);
  const [isChecked, setIsChecked] = useState(false);

  const inputText = (event: ChangeEvent<HTMLInputElement>) => {
    setEditText(event.currentTarget.value);
  };
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };
  const handleSave = () => {
    dispatch(editTask({ id: task.id, newText: editText }));
    setEdit(false);
  };
  const handleDone = () => {
    dispatch(doneTask({ id: task.id }));
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    setIsChecked(task.done);
  }, [task]);
  return (
    <Wrapp done={task.done}>
      <DateInf>{task.date}</DateInf>
      <TimeInf>{task.time}</TimeInf>
      <div>
        {edit ? (
          <Input type="text" value={editText} onChange={inputText} />
        ) : (
          <TextTask done={task.done}>{task.text}</TextTask>
        )}
      </div>
      <BtnWrapp>
        Done {"->"}
        <CheckBox type="checkbox" checked={isChecked} onChange={handleDone} />
        {!task.done && (
          <>
            {edit ? (
              <Btn color="#006400" onClick={() => handleSave()}>
                Save
              </Btn>
            ) : (
              <Btn color="#FF8C00" onClick={() => setEdit(true)}>
                Edit
              </Btn>
            )}
          </>
        )}
        <Btn color="#CD5C5C" onClick={() => handleDelete()}>
          Delete
        </Btn>
      </BtnWrapp>
    </Wrapp>
  );
};
