import { useSelector } from "../../services/hooks";
import { GoogleMapLink } from "./utils";
import css from "./stations.module.scss";

interface IStationCompanies {
  company: Array<string> | string;
  active: string;
}

const StationCompanies = ({ company, active }: IStationCompanies) => {
  switch (typeof company) {
    case "object":
      return (
        <div className={css.StationInfoCompanies}>
          {company.map((item) => {
            return item === active ? (
              <strong key={"ST_" + item}>
                {item}
                <br />
              </strong>
            ) : (
              <span key={"ST_" + item}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      );
    case "string":
      return <div className={css.StationInfoCompanies}>{company}</div>;
    default:
      return (
        <div className={css.StationInfoCompanies}>{"Undefined Company"}</div>
      );
  }
};

const StationsCompany = () => {
  const { raw } = useSelector((store) => store.stations);
  const { active } = useSelector((store) => store.networks);
  return (
    <>
      {raw && raw.network && (
        <div className={css.StationInfoCard}>
          <div className={css.StationInfoName}>
            {raw.network.name ? raw.network.name : "Unnamed Network"}
          </div>
          <StationCompanies company={raw.network.company} active={active} />
          <div className={css.StationInfoLocation}>
            {raw.network.location && (
              <GoogleMapLink
                name={[
                  raw.network.location.city,
                  raw.network.location.country,
                ].join(", ")}
                latitude={raw.network.location.latitude}
                longitude={raw.network.location.longitude}
              />
            )}
          </div>
          <div className={css.StationInfoCount}>
            Active Stations: <strong>{raw.network.stations.length}</strong>
          </div>
        </div>
      )}
    </>
  );
};

export default StationsCompany;
