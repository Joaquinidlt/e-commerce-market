import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
    // En el componente que importamos le vamos a poner state={"state"}. ej: <CustomizedSnackbars state={"success"} />. Hay 4 tipos de estados 1_success, 2_info, 3_warning y 4_error

    const open = props.stateSnack || props.stateSnackDelete || props.stateSnackUpdate;
    const setOpenSuccess = props.setStateSnack;
    
    /* const handleClick = () => {
        setOpen(true);
    }; */

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
    
        setOpenSuccess(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={props.state} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
        </Stack>
    );
}