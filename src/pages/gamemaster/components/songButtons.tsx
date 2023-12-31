import { faPlay, faPause, faBan, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Song, StateType } from "../../../assets/common";
import { useTranslation } from "react-i18next";

interface SongButtonProps {
    song: Song;
    category: StateType;
    count: StateType;
    startPlaying: (song: Song) => void;
    pausePlaying: (song: Song) => void;
    setPoints: (song: Song | null, teamPoints: StateType | null, count: StateType) => void;
    resetSong: (song: Song) => void;
}

const SongButton = (props: SongButtonProps) => {
    const { song, category, count, startPlaying, pausePlaying, setPoints, resetSong } = props;
    const [t] = useTranslation();
    
    return (
        <div key={song.id} className="horizontalpanel">
            <div className={`${category.store === song.songName ? "active" : ""} ${song.played === true ? "playedsong" : ""} song`} style={{ width: "100%" }}>
                <h4>{song.songName}</h4>
                <h4>{song.points}{t("pt")}</h4>
            </div>
            {song.songAudio?.paused ?
                <button
                    className={`${song.played === true ? "playedsong" : ""} song songbutton`}
                    onClick={() => startPlaying(song)}
                    disabled={song.played || !song.songAudio?.paused}
                >
                    <FontAwesomeIcon icon={faPlay} />
                </button>
                :
                <button
                    className={`${song.played === true ? "playedsong" : ""} song songbutton`}
                    onClick={() => pausePlaying(song)}
                    disabled={song.played}
                >
                    <FontAwesomeIcon icon={faPause} />
                </button>
            }
            {song.played !== true ?
                <button
                    className={`song songbutton`}
                    onClick={() => setPoints(song, null, count)}
                >
                    <FontAwesomeIcon icon={faBan} />
                </button>
                :
                <button
                    className={`song songbutton`}
                    onClick={() => resetSong(song)}
                >
                    <FontAwesomeIcon icon={faRotateLeft} />
                </button>
            }
        </div>
    )
};


export default SongButton;