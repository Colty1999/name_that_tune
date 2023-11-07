import { gameLogo } from "../../assets/common";

const NotFound = () => {
    return (
        <div className="mainmenu">
            <div>
                <img src={gameLogo} className="logo" alt="logo" />
            </div>
            <h1>Jaka to melodia?</h1>
            <div className="card button">
                Not Found
            </div>
            <p className="read-the-docs">
                Mateusz gietka | 2023
            </p>
        </div>
    );
};

export default NotFound;
