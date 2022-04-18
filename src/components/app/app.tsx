import Header from "../header/header";
import css from "./app.module.css";

const App = () => {

  return (
    <div className={css.App}>
      <div className={css.Contents}>
        <Header />
      </div>
    </div>
  );
};

export default App;
