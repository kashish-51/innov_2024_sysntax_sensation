import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { PresentationChartBarIcon, UserCircleIcon, InboxIcon } from "@heroicons/react/24/solid";
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { Link } from 'react-router-dom';


export function Dashboard({ onAddTask }) {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#573178]  " style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(87, 49, 120, 0.8)' }}>
      <div className="m-5 w-4">
        <Typography variant="h5" className="text-[#F7EFE5]">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem className="text-[#F7EFE5]" onClick={onAddTask}>
          <ListItemPrefix className="mr-2">
            <PresentationChartBarIcon className="w-5 h-5 text-[#F7EFE5]" />
          </ListItemPrefix>
          Add task
        </ListItem>
        <ListItem className="text-[#F7EFE5]">
          <ListItemPrefix className="mr-2">
            <InboxIcon className="w-5 h-5 text-[#F7EFE5]" />
          </ListItemPrefix>
          <Link to="/Editask" >
          Inbox </Link>
         
        </ListItem>
        <ListItem className="text-[#F7EFE5]">
          <ListItemPrefix className="mr-2">
            <TodayRoundedIcon className="w-5 h-5 text-[#F7EFE5]"/>
          </ListItemPrefix>
          Today
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full text-[#F7EFE5]" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="text-[#F7EFE5]">
          <ListItemPrefix className="mr-2">
            <UserCircleIcon className="w-5 h-5 text-[#F7EFE5]" />
          </ListItemPrefix>
          Upcoming
        </ListItem>
      </List>
    </Card>
  );
}
