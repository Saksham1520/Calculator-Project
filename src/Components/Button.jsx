import style from "./Button.module.css";

function Button(props) {
  const { buttons, buttonClicked } = props;

  return (
    <div className={style.buttonContainer}>
      {buttons.map((item) => (
        <button className={style.button} onClick={() => buttonClicked(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Button;
