import { useEffect, useState } from "react";
import { useSelector } from "../../services/hooks";
import {
  getStoreFavorites,
  setStoreFavorites,
} from "../../services/utils/storage";
import { TStationRow } from "../../services/utils/types";
import css from "./stations.module.scss";
import { GoogleMapLink } from "./utils";

const fixedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString();
};

interface IStation {
  item: TStationRow;
  favorite: boolean;
  toggleFavorite: (id: string) => void;
}

const StationCard = ({ item, favorite, toggleFavorite }: IStation) => {
  return (
    <div className={css.StationCard}>
      <div
        className={favorite ? css.StationCardFav : css.StationCardNoFav}
        onClick={() => {
          toggleFavorite(item.id);
        }}
      >
        {"\u2665"}
      </div>
      <div className={css.StationCardContainer}>
        <div className={css.StationName}>{item.name}</div>
        <div className={css.StationAddress}>
          <GoogleMapLink
            name={
              item.extra && item.extra.address
                ? item.extra.address
                : "View on Google Maps"
            }
            latitude={item.latitude}
            longitude={item.longitude}
          />
        </div>
        <div className={css.StationData}>
          <div className={css.StationBikes}>{item.free_bikes}</div>
          <div className={css.StationBikesNo}>{item.empty_slots}</div>
          <div className={css.StationTime}>{fixedDate(item.timestamp)}</div>
        </div>
      </div>
    </div>
  );
};

const StationsViewer = () => {
  const { raw } = useSelector((store) => store.stations);
  const [favorites, setFavorites] = useState<Array<string>>([]);

  useEffect(() => {
    setFavorites(getStoreFavorites());
  }, []);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id)
      ? [
          ...favorites.filter((item) => {
            return item !== id;
          }),
        ]
      : [...favorites, id];
    setFavorites(next);
    setStoreFavorites(next);
  };

  return (
    <ul>
      {raw?.network.stations.map((item) => {
        return (
          <li key={"ST_" + item.id}>
            <StationCard
              item={item}
              favorite={favorites.includes(item.id)}
              toggleFavorite={toggleFavorite}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default StationsViewer;
