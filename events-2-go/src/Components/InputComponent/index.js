import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { Button, Grid } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Please enter your email address';
    }

    return 'Please enter your email address';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function InputComponent() {
  return (
    <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2, alignContent: "centre" }} alignItems="center" justifyContent="center">
        <Grid xs={4} sm={4} md={12} sx={{ alignContent: "center", alignItems: "center" }}>
      <FormControl sx={{ width: '50ch' }}>
        <OutlinedInput placeholder="events2go@gmail.com" />
        <MyFormHelperText />
      </FormControl>
      </Grid>
      </Grid>

      {/* <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", marginTop:"10px" }}>
      <Button size="large" variant="contained" sx={{marginLeft:"8px"}}><EmailOutlinedIcon sx={{marginRight:"5px"}}/>Submit</Button>
      </Grid> */}

<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 2, alignContent: "centre" }} alignItems="center" justifyContent="center">
<Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  </Grid>
      <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center", marginTop:"10px" }}>
      <Button size="large" variant="contained"><EmailOutlinedIcon sx={{marginRight:"5px"}}/>Submit</Button>
      </Grid>
      <Grid xs={4} sm={4} md={4} sx={{ alignContent: "center", alignItems: "center" }}>
  </Grid>
</Grid>
      
    </Box>
  );
}