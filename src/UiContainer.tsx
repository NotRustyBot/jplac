import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import { useState } from "react";
import FileScreen from "./uiScreens/FileScreen";
import { DataObject, DesignServices, InsertDriveFile, Settings } from "@mui/icons-material";
import TemplateScreen from "./uiScreens/TemplateScreen";

type UiState = {
    tab: Tabs
}

enum Tabs {
    files,
    templates,
    objects,
    settings
}

type uiScreenData = {
    type: Tabs,
    name: string,
    icon: JSX.Element,
    screen: JSX.Element
}

const screens: Array<uiScreenData> = [
    {
        type: Tabs.files,
        name: "Files",
        icon: <InsertDriveFile />,
        screen: <FileScreen />
    },
    {
        type: Tabs.templates,
        name: "Templates",
        icon: <DesignServices />,
        screen: <TemplateScreen />
    },
    {
        type: Tabs.objects,
        name: "Objects",
        icon: <DataObject />,
        screen: <TemplateScreen />
    },
    {
        type: Tabs.settings,
        name: "Settings",
        icon: <Settings />,
        screen: <TemplateScreen />
    },
]

export default function UiContainer() {
    const [state, setState] = useState<UiState>({ tab: Tabs.files });
    return <div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
        <div
            style={{
                background: "#dddddd",
                width: "fit-content",
                height: "100%",
                display: "flex"
            }}
        >
            <div
                style={{
                    background: "#ffffff",
                    width: "fit-content",
                    height: "100%"
                }}
            >
                <ToggleButtonGroup
                    value={state.tab}
                    exclusive
                    orientation="vertical"
                    onChange={(_, v: Tabs) => {
                        console.log(v);
                        setState({ ...state, tab: v })
                    }}
                >
                    {
                        screens.map((data) => (
                            <Tooltip title={data.name} placement="right">
                                <ToggleButton value={data.type}>
                                    {data.icon}
                                </ToggleButton>
                            </Tooltip>
                        ))
                    }
                </ToggleButtonGroup>
            </div>
            <div
                style={{
                    width: 200
                }}
            >
                {screens.find(s => s.type == state.tab)!.screen}
            </div>
        </div>
    </div>
}
