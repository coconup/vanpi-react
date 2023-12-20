import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import { Icon} from '@mui/material';

import { useToggleRelaySwitchMutation } from '../../apis/van-pi/vanpi-app-api';

export default function SwitchControl({switchItem, state}) {
  const {id, name, icon} = switchItem;

  // const [
  //   toggleRelaySwitchTrigger, 
  //   {
  //     data={},
  //     isLoading,
  //     isFetching,
  //     isSuccess,
  //     isError,
  //     error,
  //   }
  // ] = useToggleRelaySwitchMutation();

  return (
    <Button color='secondary' sx={{
      '& .MuiPaper-root': {
        ...(state === true ? {} : {backgroundColor: 'grey.200'})
      }
    }}>
      <Card 
        sx={{ minWidth: 275 }} 
        // onClick={() => toggleRelaySwitchTrigger(switchable)}
      >
        <CardContent>
          <CardHeader
            avatar={
              <Typography sx={{ 
                  fontSize: 14, 
                  fontWeight: 500, 
                  marginBottom: '0px', 
                  alignSelf: 'center',
                  color: state === true ? 'primary.main' : 'text.secondary'
                }} color="primary" gutterBottom>
                  {state === true ? 'on' : 'off'}
                </Typography>
            }
            action={
              <Switch checked={state}/>
            }
          />
          <Icon>{icon}</Icon>
          <Typography sx={{ fontSize: 16, marginBottom: '20px' }} color="text.primary" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}