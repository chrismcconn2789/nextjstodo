import { useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItems] = useState([]);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          message: todoItem,
          done: false,
        },
        ...items,
      ]);

      setTodoItem("");
    }
  };

  const handleDone = (id) => {
    const _items = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
        };
      }

      return item;
    });

    setItems(_items);
  };

  const handleDelete = (id) => {
    const updatedArr = items.filter(
      (idItem) => items.indexOf(idItem) != items.indexOf(id)
    );

    setItems(updatedArr);
  };

  return (
    <>
      <Head>
        <title>Next.js ToDo List App</title>
      </Head>
      <div>
        <div id="headers">
          <h1 className="flex justify-center p-8 text-3xl font-bold text-[#5651ef] shadow-lg w-full mb-8 lg:text-5xl bg-[#519BEF] bg-opacity-25 ">
            Next.js To Do List
          </h1>
          <p className="flex justify-center p-1 text-center text-md">
            Enter a to do item and click on Add Item or press Enter on your
            keyboard to add to the list.
          </p>
          <p className="flex justify-center p-1 text-center text-md">
            To toggle complete/incomplete, click on the to do list item.
          </p>
        </div>
        <div id="input" className="flex-col justify-center px-5 text-center">
          <input
            className="flex-col w-full p-2 mt-5 border border-gray-700 rounded text-md lg:w-1/4"
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button
            className="flex-col text-white bg-[#A551EF] w-auto mx-5 rounded-lg text-md p-2 m-2 "
            onClick={handleAdd}
          >
            Add Item
          </button>
        </div>
        <p className="flex justify-center mt-4 text-xl font-bold">
          To Do List Items
        </p>
        <div
          id="todolist"
          className="flex items-center justify-center mt-4 text-center"
        >
          <ul>
            {items
              .filter(({ done }) => !done)
              .map(({ id, message }) => (
                <li
                  key={id}
                  className={cx(styles.item)}
                  onClick={() => handleDone(id)}
                >
                  {message}
                </li>
              ))}

            {items
              .filter(({ done }) => done)
              .map(({ id, message }) => (
                <li
                  key={id}
                  className={cx(styles.item, styles.done)}
                  onClick={() => handleDone(id)}
                >
                  {message}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
