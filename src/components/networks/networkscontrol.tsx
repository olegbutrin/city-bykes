import { SyntheticEvent } from "react";
import { useDispatch } from "../../services/hooks";
import { getNetworksList } from "../../services/actions/networks"
import css from "./networks.module.scss";
import refreshIcon from "../../assets/refresh.svg";

interface IControlButton {
  icon?: string;
  text?: string;
  onClick: (event: SyntheticEvent) => void;
}

const ControlButton = ({ icon, text, onClick }: IControlButton) => {
  return (
    <div className={css.ControlButton} onClick={onClick}>
      {icon && <img className={css.ControlButtonIcon} src={icon} alt={text}></img>}
      {text && <div className={css.ControlButtonText}>{text}</div>}
    </div>
  );
};

const NetworksControl = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.NetworksControl}>
      <ControlButton
        icon={refreshIcon}
        text={"Refresh networks"}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          dispatch(getNetworksList());
        }}
      />
    </div>
  );
};

export default NetworksControl;
