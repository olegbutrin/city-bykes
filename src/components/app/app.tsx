import { useEffect } from "react";
import Header from "../header/header";
import css from "./app.module.css";

import { apiGetNetworks } from "../../services/utils/api";


const App = () => {
  useEffect(() => {
    apiGetNetworks(
      (result) => {
        console.log(result.networks[3]);
      },
      (result) => {
        console.log(result);
      }
    );
  }, []);
  return (
    <div className={css.App}>
      <div className={css.Contents}>
        <Header />
      </div>
    </div>
  );
};

export default App;
