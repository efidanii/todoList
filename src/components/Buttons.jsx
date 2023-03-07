function Buttons({ filterStatus, ClearFilterStatus, setFilter }) {
  return (
    <div className="btns">
      <button
        type="button"
        className={
          filterStatus.is_active == null
            ? "btn btn-light btn-active"
            : "btn btn-light"
        }
        onClick={ClearFilterStatus}
      >
        All
      </button>
      <button
        type="button"
        className={
          filterStatus.is_active === true
            ? "btn btn-light btn-active"
            : "btn btn-light"
        }
        onClick={() => setFilter({ is_active: true })}
      >
        Active
      </button>
      <button
        type="button"
        className={
          filterStatus.is_active === false
            ? "btn btn-light btn-active"
            : "btn btn-light"
        }
        data-filter="3"
        onClick={() => setFilter({ is_active: false })}
      >
        Done
      </button>
    </div>
  );
}

export default Buttons;
