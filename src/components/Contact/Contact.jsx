import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={s.list}>
        <div className={s.textContainer}>
          <span>
            <FaUser />
            {name}
          </span>
          <span>
            <FaPhoneAlt />
            {number}
          </span>
        </div>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
    </>
  );
};

export default Contact;
