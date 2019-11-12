import React, { useState } from "react";
import Plan from "./components/Plan";
import "./App.css";
import QuickMenu from './components/UI/QuickMenu'
import OutletPropertiesMenu from './components/UI/OutletPropertiesMenu'
import SwitchPropertiesMenu from './components/UI/SwitchPropertiesMenu'
import { RoomContext } from './RoomContext'

function App() {

    const __quickMenuPosition = useState(null)
    const __quickMenuState = useState(false)
    const __rooms = useState([])
    const __selectedRoom = useState(null)
    const __selectedPathPoints = useState(null)
    const __pointer = useState(null)
    const __doors = useState([])
    const __pathNode = useState(null)
    const __outletPropertiesMenu = useState({ open: false })
    const __switchPropertiesMenu = useState({ open: false })

    const CTX = {
        __quickMenuPosition,
        __quickMenuState,
        __selectedRoom,
        __rooms,
        __selectedPathPoints,
        __pointer,
        __doors,
        __pathNode,
        __outletPropertiesMenu,
        __switchPropertiesMenu
    }

    return (
        <div
            className="App"
            style={{ overscrollBehavior: "none" }}
            onContextMenu={e => e.preventDefault()}
        >
            <RoomContext.Provider value={CTX}>
                <Plan />
                <QuickMenu />
                <OutletPropertiesMenu />
                <SwitchPropertiesMenu />
            </RoomContext.Provider>
        </div>
    );
}

export default App;
