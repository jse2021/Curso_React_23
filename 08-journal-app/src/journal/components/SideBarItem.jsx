import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({title='',body,id,date,imageUrls = []}) => {

/**
 * ACTIVAR LA NOTA SELECCIONADA
 */
const dispatch = useDispatch();
const onClickNote = () => {
    dispatch(setActiveNote({title, body, id, date, imageUrls}))
}

 /**
  * MEJORAR LA VISTA DEL TITULO EN EL SIDEBAR
  */
    const newTitle = useMemo(()=>{
        return title.length > 17
        ?title.substring(0,17) + '...'
        :title;
    },[title])


    return (
        <ListItem key={ id } disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body} />
                </Grid>
            </ListItemButton>
        </ListItem>
        
    );
};

export default SideBarItem;