function Add({ valueInputAdd, setValueAdd, AddTodo }) {
  return (
    <div className="addTodo">
      <input
        type="text"
        placeholder="Add todo"
        value={valueInputAdd}
        onChange={(e) => setValueAdd(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            AddTodo();
          }
        }}
      />
      <div className="send-invite-btn" onClick={AddTodo}>
        Добавить
      </div>
    </div>
  );
}

export default Add;
