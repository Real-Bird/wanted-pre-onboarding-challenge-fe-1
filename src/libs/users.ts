export async function getLogin(
  email: string,
  password: string,
  toggleForm: boolean
) {
  const postLogin = await (
    await fetch(
      `http://localhost:8080/users/${toggleForm ? "create" : "login"}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    )
  ).json();
  if (postLogin.details)
    return { data: { message: postLogin.details }, ok: false };

  localStorage.setItem("token", postLogin.token);
  return {
    data: { message: postLogin.message, token: postLogin.token },
    ok: true,
  };
}

export function hasToken(key: string) {
  if (!localStorage.getItem(key)) return false;
  return true;
}

export function getToken(key: string) {
  const value = localStorage.getItem(key);
  if (value) return value;
  return "";
}
