import React from "react";
import Entry from "./Entry";
import emojipidea from "./emojipidea";

// 1.  Create entry components.
// 2.  Create props to replace hardcoded data.
// 3a. Import the emojipodea const.
// 4a. Map through the emojipidea array and refer Entry components.

function createEntry(emojiterm){
   return( <Entry 
        key={emojiterm.id}
        emoji={emojiterm.emoji}
        name={emojiterm.name}
        description={emojiterm.description}
    />
   );
}
function App() {
    return (
        <div>
            <h1>
                <span>🌜m😮j🍼🔎🕯De🍎</span>
            </h1>
            <dl className="dictionary">
                {emojipidea.map(createEntry)}
            </dl>
        </div>

    );
}
export default App;