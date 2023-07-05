import { useState } from "react";
import "./App.css";
import { ApiRepositoryImp } from "./gateway/apiRepository";
import "./components/ongoing";
import { Ongoing } from "./components/ongoing";
import { Hashtags } from "./components/hashtags";
import { HeaderOfSection } from "./components/header-of-section/headerOfSection";
import { headersOfSectionData } from "./constans/headersOfSection";
import { colorsOfHeadersOdSectionData } from "./constans/headersOfSection";

function App() {
    const [count, setCount] = useState(0);
    const { onAir, news, moreNews, content, animeUpdate } =
        headersOfSectionData;
    const {
        onAirColor,
        newsColor,
        moreNewsColor,
        contentColor,
        animeUpdateColor,
    } = colorsOfHeadersOdSectionData;
    return (
        <div className="app-wrapper">
            <div className="app">
                <HeaderOfSection
                    sectionType={onAir}
                    colorOfSectionType={onAirColor}
                />
                <Ongoing />
                <Hashtags />
                <HeaderOfSection
                    sectionType={news}
                    colorOfSectionType={newsColor}
                />
            </div>
        </div>
    );
}

export default App;
