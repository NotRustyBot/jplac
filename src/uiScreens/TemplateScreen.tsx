import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

type Params = {}


export default function TemplateScreen(params: Params) {
    return (<div
        style={{ width: "100%", height: "100%" }}
    >
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Templates
                </ListSubheader>
            }
        >
            <ListItemButton>
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItemButton>
        </List>
    </div>)
}