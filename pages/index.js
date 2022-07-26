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
    <div className="m-auto w-1/3">
      <h1 className="p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-white font-lato text-3xl font-bold text-center justify-center mt-4">
        Next.js To Do List
      </h1>
      <form className="flex justify-center mt-8 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
        <input
          type="text"
          className="border-gray-600 rounded border-2 mx-2 justify-center px-1 text-xl w-80 py-1"
          onChange={handleChange}
          value={userInput}
        />
        <div className="flex">
          <button
            className="flex text-xl bg-green-500 px-2 rounded font-bold text-white py-1"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
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
              <table className="justify-center">
                <tr className="w-auto justify-between">
                  <td className="w-2/3 px-2" key={idx}>
                    {todo}{" "}
                  </td>
                  <td className="w-1/3 px-2">
                    <div className="align-middle inline">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(todo);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            );
          })
        ) : (
          <span className="text-gray-400">Enter a to do item</span>
        )}
      </ul>
    </div>
  );
}
