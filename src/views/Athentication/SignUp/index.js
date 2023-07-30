import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from 'react';

export default function SignUp() {

  const [userId, setUserId] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [userRole, setuserRole] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");

  const SignUpHandler = () => {
    const data = {
      userId,
      userPassword,
      userPasswordCheck,
      userName,
      userRole

    };

    //http://localhost:8080/api/auth/signUp 여기에 data를 포함시켜서 전달
    axios.
      post("http://localhost:8080/api/auth/signUp", data)
      .then((response) => {

      })
      .catch((error) => {

      })

  }

  return (
    <Card sx={{ minWidth: 275, maxWidth: "50vw" }} >
      <CardContent>
        <Box>
          <TextField fullWidth label="아이디" type='text' variant="standard" onChange={(e) => setUserId(e.target.value)} />
          <TextField fullWidth label="비밀번호" type='password' variant="standard" onChange={(e) => setuserPassword(e.target.value)} />
          <TextField fullWidth label="비밀번호 확인" type='password' variant="standard" onChange={(e) => setUserPasswordCheck(e.target.value)} />
          <TextField fullWidth label="이름" type='text' variant="standard" onChange={(e) => setuserName(e.target.value)} />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" variant="standard">역할</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="admin" control={<Radio />} label="admin" onChange={(e) => setuserRole(e.target.value)} />
              <FormControlLabel value="users" control={<Radio />} label="users" onChange={(e) => setuserRole(e.target.value)} />
              <FormControlLabel value="guests" control={<Radio />} label="guests" onChange={(e) => setuserRole(e.target.value)} />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>

        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={() => SignUpHandler()} variant="contained">회원가입</Button>
      </CardActions>
    </Card>



  )
}
