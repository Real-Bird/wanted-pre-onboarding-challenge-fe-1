export async function getTodos(authKey: string) {
  const { data } = await (
    await fetch(`http://localhost:8080/todos`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authKey },
    })
  ).json();
  return data;
}

export async function setTodo(title: string, content: string, authKey: string) {
  await fetch(`http://localhost:8080/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function getTodoById(id: string | undefined, authKey: string) {
  const data = await (
    await fetch(`http://localhost:8080/todos/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authKey },
    })
  ).json();
  return data;
}

export async function updateTodo(
  title: string,
  content: string,
  id: string | undefined,
  authKey: string
) {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
    body: JSON.stringify({ title, content }),
  });
}

export async function deleteTodo(id: string | undefined, authKey: string) {
  await fetch(`http://localhost:8080/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: authKey,
    },
  });
}
