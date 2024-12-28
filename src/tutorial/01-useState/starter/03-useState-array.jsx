import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log("id", id);
    const list = people.filter((people) => people.id !== id);
    setPeople(list)
  };
  const clearAll = () => {
    setPeople([]);
  };

  return (
    <>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <button type="button" onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button type="button" onClick={clearAll}>
        delete all
      </button>
    </>
  );
};

export default UseStateArray;
