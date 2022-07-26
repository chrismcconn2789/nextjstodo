import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodoList([userInput, ...todoList]);

    setUserInput("");
  };

  const handleDelete = (todo) => {
    const updatedArry = todoList.filter(
      (todoItem) => todoList.indexOf(todoItem) != todoList.indexOf(todo)
    );

    setTodoList(updatedArry);
  };

  return (
    <div>
      <h1 className="flex justify-center mt-4 text-center text-green-500 text-7xl font-lato font-bold">
        Next.js To Do List
      </h1>

      <p className="flex justify-center mt-5 text-center text-gray-600 text-3xl font-lato">
        Items
      </p>

      <form className="flex justify-center mt-8">
        <input
          type="text"
          className="border-gray-600 rounded border-2 mx-2 justify-center px-1 text-xl"
          onChange={handleChange}
          value={userInput}
        />
        <div className="flex">
          <button
            className="flex text-xl border-2 px-2 border-green-400 rounded"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="px-1 text-green-400 w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>{" "}
            Add Item
          </button>
        </div>
      </form>
      <ul className="flex flex-col text-center mt-8 text-2xl">
        {todoList.length >= 1 ? (
          todoList.map((todo, idx) => {
            return (
              <li className="justify-center m-1" key={idx}>
                {todo}{" "}
                <div className="align-middle inline">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDelete(todo);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-red-500 px-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <span className="text-gray-400">Enter a to do item</span>
        )}
      </ul>
    </div>
  );
}
