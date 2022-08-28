function TodoListBoard(props) {
  const { activeBoard, todoList, setTodoList } = props;

  let activeDashboardList = todoList.filter((item) =>
    activeBoard.isDoneBoard !== null
      ? item.isDone === activeBoard.isDoneBoard
      : true
  );

  function todoListChange(i) {
    let newList = [...todoList];
    let changeItem = newList.find((item, index) => index === i);
    changeItem.isDone = !changeItem.isDone;
    setTodoList(newList);
  }

  function deleteTodoList(i) {
    let newList = [...todoList];
    newList.splice(i, 1);
    setTodoList(newList);
  }

  if (activeDashboardList.length === 0)
    return (
      <div style={{ paddingBottom: "1rem" }}>
        目前 [ {activeBoard.name} ] 尚無代辦事項
      </div>
    );

  return activeDashboardList.map((item, index) => {
    return (
      <li key={index}>
        <label className="todoList_label">
          <input
            className="todoList_input"
            type="checkbox"
            checked={item.isDone}
            onChange={() => todoListChange(index)}
          />
          <span> {item.content}</span>
        </label>
        <a onClick={() => deleteTodoList(index)}>
          <i className="fa fa-times"></i>
        </a>
      </li>
    );
  });
}

export default TodoListBoard;
