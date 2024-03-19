// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { Box } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(3),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
//   marginTop: theme.spacing(3),
//   maxWidth: 400,
//   margin: 'auto',
// }));

// function Login() {
//   return (
//     <>
//       <Box
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1 },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <Grid container justifyContent="center" alignItems="center">
//           <Item>
//             <h2 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
//               Already have an account???
//             </h2>
//             <h5 style={{ color: 'white', fontSize: '16px', fontStyle: 'italic' }}>SignIn with E-mail and password</h5>

//             <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal" />
//             <TextField id="password" label="Password" type="password" variant="outlined" fullWidth margin="normal" />

//             <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '15px' }}>
//               Login
//             </Button>
//           </Item>
//         </Grid>
//       {/* </Box> */}
//     </>
//   );
// }

// export default Login;
