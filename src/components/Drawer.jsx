import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import "./navbar/navbar.scss"



const li = [
    {
        pri: 'Acceuil',
        compo: "",
        icon: ""
    }
    ,
    {
        pri: 'Qui sommes nous ?'
    },
    {
        pri: 'Services'
    },
    {
        pri: 'Contact'
    }
]

const Drawerr = ({ open, setOpen }) => {
    const toggleDrawer = (isOpen) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setOpen(isOpen);
    };

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {
                        li.map((obj, index) => (
                            <Link key={obj.pri} className='drawer-link-item'>
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ListItemIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={obj.pri} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                </List>
            </Box>
        </Drawer>
    );
};


export default Drawerr;
