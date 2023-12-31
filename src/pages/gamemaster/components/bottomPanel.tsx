import { useTranslation } from "react-i18next";
import { StateType } from "../../../assets/common";

interface BottomPanelProps {
    team1: StateType;
    team2: StateType;
    team3: StateType;
}

const BottomPanel = (props: BottomPanelProps) => {
    const { team1, team2, team3 } = props;
    const [t] = useTranslation();
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "0.2rem", marginTop: "2rem" }}>
            <button
                onClick={() => {
                    team1.setStorageState(JSON.stringify({name: JSON.parse(team1.store!).name, points: 0}));
                    team2.setStorageState(JSON.stringify({name: JSON.parse(team2.store!).name, points: 0}));
                    team3.setStorageState(JSON.stringify({name: JSON.parse(team3.store!).name, points: 0}));
                }
                }
                className="punctationbutton"
            >
                {t("gamemaster.resetpoints")}
            </button>
            <button
                onClick={() => {window.open(`${window.location.origin}${window.location.pathname}#/game`, "_blank", "popup")}}
                className="punctationbutton"
            >
                {t("gamemaster.opennewgamewindow")}
            </button>

        </div>
    )
}

export default BottomPanel;