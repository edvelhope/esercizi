export function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={onLogin}>
      <input data-testid="username" name="username" />
      <input data-testid="password" name="password" />
      <input data-testid="remember" name="remember" type="checkbox" />

      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
