import {
  useTheme,
  Grid,
  TextField,
  Button
} from '@mui/material';

import Group from '../assets/Group.png';
import Forest from '../assets/dark-forest.jpg';

export const LoginScreen = () => {
  const theme = useTheme();
  return (
    <Grid container style={{
      minHeight: '100vh',
      margin: 0,
      backgroundSize: '100%',
      backgroundImage: `url(${Forest})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Grid container justifyContent={'center'} alignContent={'center'} xs={24} sm={12}>
        <Grid container sm={3} justifyContent={'center'} bgcolor={'white'} borderRadius={'25px'} border={'2px solid gray'}>
          <Grid container sm={12} justifyContent={'center'} marginTop={4}>
            <img alt='logo' src={Group} />
            <Grid item>
              <TextField
                fullWidth
                variant='filled'
                label='Email'
                margin='normal'
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant='filled'
                type='password'
                label='Password'
                margin='normal'
              />
            </Grid>
            <Grid container justifyContent={'center'}>
              <Grid item sm={8} margin={4}>
                <Button variant={'contained'} sx={{ borderRadius: '25px', width: '100%' }}>Log in</Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button>Forgot password?</Button>
            </Grid>
            <Grid item>
              <Button>Interested in joining?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};