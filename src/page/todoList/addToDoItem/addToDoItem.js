import { useState } from "react";

function AddTodoItem(props) {
  const { todoList, setTodoList } = props;

  const [newTodoItem, setNewTodoItem] = useState("");

  function addTodoList() {
    let newList = [...todoList];
    newList.unshift({
      content: newTodoItem.trim(),
      isDone: false,
    });

    setTodoList(newList);
    setNewTodoItem("");
  }

  return (
    <div className="inputBox">
      <input
        value={newTodoItem}
        type="text"
        placeholder="請輸入待辦事項"
        onChange={(e) => setNewTodoItem(e.target.value)}
      />
      <a onClick={() => newTodoItem.trim() !== "" && addTodoList()}>
        <i className="fa fa-plus"></i>
      </a>
    </div>
  );
}

export default AddTodoItem;
