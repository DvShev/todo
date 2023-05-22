import { useSelector } from "react-redux";
import { TasksState } from "@/store/reducer";
import { sortTasks } from "@/service/sortDone";
import { ItemList } from "./ItemList";
import { styled } from "styled-components";
const ListEmpty = styled.div`
  margin: 10px;
  font-size: 20px;
`;
export const List = () => {
  const { tasks, search } = useSelector((state: TasksState) => state);

  const filterSearch = () => {
    if (search === "") {
      return tasks;
    } else {
      return tasks.filter((item) => {
        return item.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }
  };
  return (
    <ul>
      {filterSearch().length ? (
        sortTasks(filterSearch()).map((task, idx) => (
          <ItemList key={idx} task={task} />
        ))
      ) : (
        <ListEmpty>empty list</ListEmpty>
      )}
    </ul>
  );
};
