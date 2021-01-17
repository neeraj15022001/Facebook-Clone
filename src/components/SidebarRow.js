import React from 'react';
import {Avatar} from "@material-ui/core";
import "./css/SidebarRow.css";

function SidebarRow(props) {
    const {title, src, Icon} = props
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
