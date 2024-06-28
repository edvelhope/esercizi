export default function Welcome({
    inputValue,
    handleInputChange,
    handleSubmit,
  }) {
    return (
      <div>
        <h1>
          Benvenuto! Per visualizzare un utente GitHub, scrivi il suo username
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Visualizza un utente GitHub</button>
        </form>
      </div>
    );
  }