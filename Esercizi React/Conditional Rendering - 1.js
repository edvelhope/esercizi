export function Welcome({ name = "World", age }) {
  return (
    <div>
      <p>Hello, {name}!</p>
      {age > 18 && <Age age={age} />}
      {age !== undefined && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </div>
  );
}
