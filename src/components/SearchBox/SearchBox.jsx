import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.box}>
        <span>Find contacts by name</span>
        <input name="username" type="text" onChange={onChange} value={filter} />
      </label>
    </div>
  );
};

export default SearchBox;
