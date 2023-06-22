import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ApiRepositoryImp } from "./gateway/apiRepository";
import "./components/ongoing";
import { Ongoing } from "./components/ongoing";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="app-wrapper">
            <div className="app">
                <Ongoing />
            </div>
        </div>
    );
}

export default App;
