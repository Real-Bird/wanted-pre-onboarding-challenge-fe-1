const BASE_URL = "http://localhost:8080/todos";
const AUTH_TOKEN = localStorage.getItem("token");

export async function getTodos(authKey: string) {
  const { data } = await (
    await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authKey },
    })
  ).json();
  return data;
}

export async function getTodosQuery() {
  const toDoRes = await (
    await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${AUTH_TOKEN}`,
      },
    })
  ).json();
  return toDoRes;
}

export async function setTodo(title: string, content: string) {
  await fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AUTH_TOKEN}`,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function getTodoById(id: string) {
  const data = await (
    await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${AUTH_TOKEN}`,
      },
    })
  ).json();
  return data;
}

export async function updateTodo(title: string, content: string, id: string) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AUTH_TOKEN}`,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function deleteTodo(id: string) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${AUTH_TOKEN}`,
    },
  });
}
