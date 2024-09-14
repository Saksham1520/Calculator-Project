import styles from "./Display.module.css";

const Display = (props) => {
  const { inputValue } = props;
  return (
    <input
      className={styles.display}
      value={inputValue}
      type="text"
      readOnly
    ></input>
  );
};

export default Display;
