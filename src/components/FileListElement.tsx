import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react"

type Params = {
    name: string,
    files: Array<string>
}
export default function FileListElement(params: Params) {
    const [open, setOpen] = useState(true)
    return (<List dense>
        <ListItemButton onClick={() => { setOpen(!open) }}>
            <ListItemText primary={params.name} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List dense component="div" disablePadding>
                {
                    params.files.map(file => {
                        return (<ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary={file} />
                        </ListItemButton>)
                    })
                }
            </List>
        </Collapse>
    </List>)
}