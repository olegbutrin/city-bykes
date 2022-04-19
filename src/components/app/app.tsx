import Header from "../header/header";
import Column from "../column/column";
import NetworksControl from "../networks/networkscontrol";
import NetworksViewer from "../networks/networksviewer";
import StationsCompany from "../stations/stationscompany";
import StationsViewer from "../stations/stationsviewer";
import Spinner from "../spinner/spinner";
import { getNetworksList } from "../../services/actions/networks";
import { getStationsInfo } from "../../services/actions/stations";
import { useDispatch, useSelector } from "../../services/hooks";
import { useEffect } from "react";
import css from "./app.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNetworksList());
  }, [dispatch]);

  const { companies, active } = useSelector((store) => store.networks);
  const { request, error } = useSelector((store) => store.stations);

  useEffect(() => {
    if (Object.keys(companies).length && active) {
      dispatch(getStationsInfo(companies[active]));
    }
  }, [companies, active, dispatch]);

  return (
    <div className={css.App}>
      <div className={css.Contents}>
        <Header />
        <div className={css.Columns}>
          <Column title={"Bikes Networks"} pin={<NetworksControl />}>
            <>
              <NetworksViewer />
            </>
          </Column>
          <Column
            title="Network Info"
            pin={!request && !error ? <StationsCompany /> : <></>}
          >
            <>
              {request && <Spinner />}
              {!request && !error && <StationsViewer />}
            </>
          </Column>
        </div>
      </div>
    </div>
  );
};

export default App;
