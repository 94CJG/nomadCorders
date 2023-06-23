import ProTypes from 'prop-types';
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.title}>{text}</button>;
}

Button.ProTypes = {
  text: ProTypes.string.isRequired,
};

export default Button;
