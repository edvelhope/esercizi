export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleImageClick(event) {
    event.stopPropagation();
    console.log(event.target.src);
  }
  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        <img
          src="\src\Assets\come-capire-le-dimensioni-del-cucciolo-di-cane_900x760.avif"
          alt="dog"
          width={300}
          height={253}
          onClick={handleImageClick}
        />
        Click me
      </button>
    </div>
  );
}
