import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { searchTask } from "@/store/reducer";

import { Input } from "@/components/todo/AddBar";

export const FilterBar: FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();
  const inputText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  useEffect(() => {
    dispatch(searchTask({ req: search }));
  }, [search]);
  return (
    <div>
      <Input
        style={{ width: "240px" }}
        className="topSearc form-control"
        type="text"
        value={search}
        onChange={inputText}
        placeholder={"enter to search"}
      />
    </div>
  );
};
