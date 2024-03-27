export const returnApi = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
};
