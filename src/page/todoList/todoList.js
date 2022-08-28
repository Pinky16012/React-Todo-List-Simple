import { useState } from "react";
import AddTodoItem from "./addToDoItem/addToDoItem";
import TodoListBoard from "./toDoListBoard/toDoListBoard";

function TodoList() {
  const [dashboards, setDashboard] = useState([
    {
      name: "全部",
      active: true,
      isDoneBoard: null,
    },
    {
      name: "待完成",
      active: false,
      isDoneBoard: false,
    },
    {
      name: "已完成",
      active: false,
      isDoneBoard: true,
    },
  ]);

  function changeDashboard(i) {
    let newDashboards = [...dashboards];
    newDashboards.forEach((item, index) => {
      if (index === i) item.active = true;
      else item.active = false;
    });
    setDashboard(newDashboards);
  }

  const [todoList, setTodoList] = useState([
    {
      content: "把冰箱發霉的檸檬拿去丟",
      isDone: false,
    },
    {
      content: "打電話叫媽媽匯款給我",
      isDone: false,
    },
  ]);

  function clearDoneTodoList() {
    let newList = [...todoList];
    newList = newList.filter((item) => item.isDone === false);
    setTodoList(newList);
  }

  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
          <a>ONLINE TODO LIST</a>
        </h1>
        <ul>
          <li className="todo_sm">
            <a>
              <span>王小明的代辦</span>
            </a>
          </li>
          <li>
            <a href="#loginPage">登出</a>
          </li>
        </ul>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <div className="todoList_Content">
          <AddTodoItem
            todoList={todoList}
            setTodoList={setTodoList}
          ></AddTodoItem>
          <div className="todoList_list">
            <ul className="todoList_tab">
              {dashboards.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={item.active ? "active" : ""}
                      onClick={() => changeDashboard(index)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="todoList_items">
              <ul className="todoList_item">
                <TodoListBoard
                  activeBoard={dashboards.find(
                    (dashboard) => dashboard.active === true
                  )}
                  todoList={todoList}
                  setTodoList={setTodoList}
                ></TodoListBoard>
              </ul>
              <div className="todoList_statistics">
                <p>
                  {todoList.filter((item) => item.isDone === false).length}
                  個待完成項目
                </p>
                <a onClick={() => clearDoneTodoList()}>清除已完成項目</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
