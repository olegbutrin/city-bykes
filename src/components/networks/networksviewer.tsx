import { setActiveNetwork } from "../../services/actions/networks";
import { useSelector, useDispatch } from "../../services/hooks";
import Spinner from "../spinner/spinner";
import css from "./networks.module.scss";

interface INetworksCard {
  text: string;
  id?: string;
  active?: boolean;
}

const NetworksCard = ({ text, id, active }: INetworksCard) => {
  const dispatch = useDispatch();
  return (
    <div
      className={active ? css.NetworkCardActive : css.NetworkCard}
      onClick={() => {
        dispatch(setActiveNetwork(text));
      }}
    >
      <div className={css.NetworkCardText}>{text}</div>
    </div>
  );
};

const NetworksViewer = () => {
  const { request, error, companies, active } = useSelector(
    (store) => store.networks
  );
  const names = Object.keys(companies);
  return request ? (
    <Spinner />
  ) : error ? (
    <div className={css.Error}>{error}</div>
  ) : (
    <ul>
      {[...names].map((name) => {
        return (
          <li key={"NTW_" + name}>
            <NetworksCard
              text={name}
              id={companies[name]}
              active={name === active}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NetworksViewer;
