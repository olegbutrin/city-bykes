import css from "./spinner.module.css";
import refreshIcon from "../../assets/refresh.svg";

const Spinner = () => {
  return (
    <div className={css.SpinnerBox}>
      <img className={css.Spinner} src={refreshIcon} alt={"Spinner"}></img>
    </div>
  );
};

export default Spinner;
