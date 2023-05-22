import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerPaletteForm from './DrawerPaletteForm';
import MainPaletteForm from './MainPaletteForm';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';

const drawerWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        height: '100vh',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NewPaletteForm(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const [colors, setColors] = React.useState([]);
    const [newPaletteName, setNewPaletteName] = React.useState([]);
    const navigate = useNavigate()
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const addNewColor = (newColor, newName) => {
        const newColorObject = { color: newColor, name: newName }
        setColors([...colors, newColorObject])
    }

    const removeColor = (oldColor) => {
        setColors([...colors].filter(color => color != oldColor))
    }

    const handleSubmit = () => {
        const newName = newPaletteName

        const newPalette = {
            paletteName: newName,
            id: newName.toLocaleLowerCase().replace(/ /g, "-"),
            colors: colors
        }
        props.handleSave(newPalette)
        navigate('/')
    }

    const handleChange = (evt) => {
        setNewPaletteName(evt.target.value)
    }

    const handleLoad = (evt) => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => props.palettes.every(
            ({ paletteName }) => paletteName.toLowerCase() !== newPaletteName.toLowerCase()
        ))
    }

    React.useEffect(() => {
        handleLoad()
    })

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="default">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit} style={{ display: 'flex', padding: '10px 0' }}>
                        <TextValidator
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter palette name", "Palette already exists"]}
                            label="Palette Name" value={newPaletteName} onChange={handleChange}
                        />

                        <Button variant="contained" color="primary" type="submit">Save Palette</Button>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <DrawerPaletteForm colors={colors} addNewColor={addNewColor} removeColor={removeColor} />

            </Drawer>
            <Main open={open}>
                {/* <DrawerHeader /> */}
                <MainPaletteForm colors={colors} addNewColor={addNewColor} removeColor={removeColor} />
            </Main>
        </Box>
    );
}