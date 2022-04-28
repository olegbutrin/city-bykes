import css from "./column.module.scss";

interface IColumnProps {
  title?: string;
  pin?: JSX.Element;
  children?: JSX.Element;
}
const Column = ({ title, pin, children }: IColumnProps): JSX.Element => {
  return (
    <div className={css.Column}>
      {title && <div className={css.ColumnTitle}>{title}</div>}
      {pin && <div className={css.ColumnPin}>{pin}</div>}
      {children && <div className={css.ColumnBody}>{children}</div>}
    </div>
  );
};

export default Column;
