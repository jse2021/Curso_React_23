import { Link as RouterLink } from "react-router-dom";

import { Button,Grid,Link,TextField,Typography } from "@mui/material";
import {Google} from '@mui/icons-material'

export const LoginPage = () => {
    return (
        <>
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems ="center"
            justifyContent="center"
            sx = {{minHeight:'100vh', backgroundColor:'primary.main',pt:4}}
        >
        
        <Grid 
            alignItemsclassName='box-shadow'
            xs={3}
            sx ={{backgroundColor:'white',padding:3,borderRadius:2}}
        >
        <Typography variant='h5' sx ={{mb:1}}>Login</Typography>
        <from>
            <Grid container> 
                <Grid item xs={12}>
                    <Textfield 
                        label='correo'
                        type='email'
                        placeholder='correo'
                        fullwidth
                    />
                </Grid>
                <Grid item>
                    <Textfield 
                        label='contraseña'
                        type='password'
                        placeholder='contraseña'
                        fullwidth
                    />
                </Grid>

                <Grid container spacing={2} sx={{mb:2 , mt:1}}>
                <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                    Login
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                    <Google />
                    <Typography sx={{ml:1}}> GOOGLE</Typography>

                </Button>
                </Grid>

                </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>

                        </Link>
                        Crear una cuenta
                    </Grid>

            </Grid>
        </from>
        </Grid>
        </Grid>
        
        </>
    );
};

export default LoginPage;