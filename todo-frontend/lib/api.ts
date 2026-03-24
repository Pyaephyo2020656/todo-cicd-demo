export interface Todo {
  id?: number;
  task: string;
  completed: boolean;
}

const API_URL = "http://localhost:8080/api/todos";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL);
  return res.json();
};

export const addTodo = async (task: string): Promise<Todo> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, completed: false }),
  });
  return res.json();
};