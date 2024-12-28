import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const drawerWidth = 240;


export default function Header({chooseView}) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        chooseView(index)
    };

    return (
        <Box>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar>
                    <Typography variant="h6">
                        Store Online
                    </Typography>

                </Toolbar>
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Pedidos', 'Produtos'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <LocalGroceryStoreIcon /> : <LocalOfferIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>


    )
}
