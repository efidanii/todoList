import { useSelector, useDispatch } from "react-redux";
import { ClearFilterStatus, SetFilter } from "../store/todoSlice";

function Buttons({}) {
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const dispatch = useDispatch();

  return (
    <div className="btns">
      <button
        type="button"
        className={
          filterStatus.is_active == null
            ? "btn btn-light btn-active"
            : "btn btn-light"
        }
        onClick={() => dispatch(ClearFilterStatus())}
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
        onClick={() => dispatch(SetFilter({ is_active: true }))}
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
        onClick={() => dispatch(SetFilter({ is_active: false }))}
      >
        Done
      </button>
    </div>
  );
}

export default Buttons;
