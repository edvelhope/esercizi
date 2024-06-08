import { Container } from "./Container";
import { HelloWorld } from "./HelloWorld";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <Container title={<h1>My Awesome App</h1>}>
      <hr />
      <Welcome />
      <HelloWorld />
      <TodoList />
    </Container>
  );
}
