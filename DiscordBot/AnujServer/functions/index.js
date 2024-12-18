const GetHealthCheckMessage = async () => {
  try {
    const response = await fetch("http:localhost:3000//api/health");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const CreateAccount = async (name, email, password) => {
  try {
    const response = await fetch("http:localhost:3000//api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    if (response.ok) {
      return "account created successfully 🎉";
    } else {
      return "failed to create account 😥";
    }
  } catch (error) {
    console.log(error);
  }
};

const CreateTodo = async (name, title, description) => {
  try {
    const response = await fetch("http:localhost:3000//api/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        description,
      }),
    });
    if (response.ok) {
      return "todo created successfully 🎉";
    } else {
      return "failed to create todo 😥";
    }
  } catch (error) {
    console.log(error);
  }
};

const GetTodos = async (name) => {
  try {
    const response = await fetch(
      "http:localhost:3000/api/getAllTodos?name=" + name
    );
    if (response.ok) {
      const data = await response.json();
      const todos = data.data;
      return todos;
    } else {
      return "failed to get todos 😥";
    }
  } catch (error) {
    console.log(error);
  }
};

export { GetHealthCheckMessage, CreateAccount, CreateTodo, GetTodos };
