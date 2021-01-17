import React from 'react';
import SidebarRow from "./SidebarRow";
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FlagIcon from '@material-ui/icons/Flag';
import MessageIcon from '@material-ui/icons/Message';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddBoxIcon from '@material-ui/icons/AddBox';
import "./css/Sidebar.css";
import {useStateValue} from "./StateProvider";

function Sidebar() {
    const [{user}, display] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospitalIcon} />
            <SidebarRow title="Pages" Icon={FlagIcon} />
            <SidebarRow title="Friends" Icon={PeopleIcon} />
            <SidebarRow title="Messenger" Icon={MessageIcon} />
            <SidebarRow title="MarketPlace" Icon={StoreIcon} />
            <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
            <SidebarRow title="More" Icon={AddBoxIcon} />
        </div>
    )
}

export default Sidebar
