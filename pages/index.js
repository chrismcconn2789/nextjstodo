import { useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";

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
    <>
      <Head>
        <title>Next.js ToDo List App</title>
      </Head>
      <div className="w-1/3 m-auto">
        <h1 className="justify-center p-6 mt-4 text-3xl font-bold text-center text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 font-lato">
          Next.js To Do List
        </h1>
        <form className="flex justify-center p-6 mt-8 bg-white border border-gray-200 rounded-lg shadow-md">
          <input
            type="text"
            className="justify-center px-1 py-1 mx-2 text-xl border-2 border-gray-600 rounded w-80"
            onChange={handleChange}
            value={userInput}
          />
          <div className="flex">
            <button
              className="flex px-2 py-1 text-xl font-bold text-white bg-green-500 rounded"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 px-1 text-white"
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
        <ul className="flex flex-col mt-8 text-2xl text-center">
          {todoList.length >= 1 ? (
            todoList.map((todo, idx) => {
              return (
                <table key={idx} className="justify-center">
                  <tr className="justify-between w-auto">
                    <td className="w-2/3 px-2" key={idx}>
                      {todo}{" "}
                    </td>
                    <td className="w-1/3 px-2">
                      <div className="inline align-middle">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDelete(todo);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-600"
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
      <Footer />
    </>
  );
}
