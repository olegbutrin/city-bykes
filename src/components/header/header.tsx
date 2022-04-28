import css from "./header.module.scss";

const Header = () => {
  return (
    <div className={css.Header}>
      <div className={css.HeaderItem}>CityBikes</div>
    </div>
  );
};

export default Header;
