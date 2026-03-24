"use client";
import { useEffect, useState } from "react";
import { getTodos, addTodo, Todo } from "@/lib/api";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    const newTodo = await addTodo(input);
    setTodos([...todos, newTodo]);
    setInput("");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">CI/CD Demo: To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input 
          className="border p-2 text-black" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2">Add</button>
      </div>
      <ul>
        {todos.map(t => <li key={t.id} className="border-b py-2">{t.task}</li>)}
      </ul>
    </main>
  );
}