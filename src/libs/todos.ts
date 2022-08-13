const BASE_URL = "http://localhost:8080/todos";

export async function getTodos(authKey: string) {
  const { data } = await (
    await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authKey },
    })
  ).json();
  return data;
}

export async function setTodo(title: string, content: string, authKey: string) {
  await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function getTodoById(id: string, authKey: string) {
  const data = await (
    await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authKey },
    })
  ).json();
  return data;
}

export async function updateTodo(
  title: string,
  content: string,
  id: string,
  authKey: string
) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function deleteTodo(id: string, authKey: string) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
  });
}
