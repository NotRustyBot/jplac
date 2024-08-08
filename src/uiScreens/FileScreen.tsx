import { AspectRatio, DesignServices, FilePresent, InsertPhoto } from "@mui/icons-material";
import { List, ListSubheader } from "@mui/material"
import FileListElement from "../components/FileListElement";

type Params = {}

export enum FileCategory {
    scene,
    image,
    manifest,
    template
}

type CategoryInfo = {
    type: FileCategory,
    name: string,
}

const categories: Array<CategoryInfo> = [
    {
        type: FileCategory.scene,
        name: "Scenes",
    },
    {
        type: FileCategory.image,
        name: "Images",
    },
    {
        type: FileCategory.manifest,
        name: "Manifests",
    },
    {
        type: FileCategory.template,
        name: "Templates",
    },
]

export default function FileScreen(params: Params) {
    const files: Record<FileCategory, Array<string>> = {
        [FileCategory.scene]: ["level1.json"],
        [FileCategory.image]: ["sprite.png", "particle.png"],
        [FileCategory.manifest]: ["assets.json"],
        [FileCategory.template]: ["player.json"],
    }
    return (<div
        style={{ width: "100%", height: "100%" }}
    >
        <List
            component="nav"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Files
                </ListSubheader>
            }
        >
            {
                categories.map(category => {
                    return (<FileListElement key={category.type} name={category.name} files={files[category.type]}></FileListElement>)
                })
            }
        </List>
    </div>)
}