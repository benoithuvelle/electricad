import React, { useState } from "react";
import Plan from "./components/Plan";
import "./App.css";
import QuickMenu from './components/UI/QuickMenu'
import { RoomContext } from './RoomContext'

function App() {

    const __quickMenuPosition = useState(null)
    const __quickMenuState = useState(false)
    const __rooms = useState([])
    const __selectedRoom = useState(null)
    const __selectedPathPoints = useState(null)

    const CTX = {
        __quickMenuPosition,
        __quickMenuState,
        __selectedRoom,
        __rooms,
        __selectedPathPoints
    }
    

    return (
        <div
            className="App"
            style={{ overscrollBehavior: "none" }}
            onContextMenu={e => e.preventDefault()}
        >
            <RoomContext.Provider value={CTX}>
                <Plan/>
                <QuickMenu/>
            </RoomContext.Provider>
        </div>
    );
}

export default App;
