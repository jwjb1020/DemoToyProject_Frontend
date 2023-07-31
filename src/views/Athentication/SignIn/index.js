import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material"
import { Box } from "@mui/system"
import axios from 'axios';

export default function SignIn() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const SignInHandler =()=>{
        if(userId.length=== 0 || userPassword.length ===0){
            alert("이메일과 비밀번호를 입력해주세요.");
            return;
        }

        const data = {
            userId,
            userPassword

        }
        //data를 가지고 post 형식으로 controller에 전달
        axios.post("http://localhost:8080/api/auth/signIn",data)
        .then((response) => {
            const responseData = response.data;
            console.log(responseData);
            if(!responseData.result){
               alert("로그인에 실패했습니다."); 
               return;
            }

            //쿠키에 토큰값 넣기
            const {token, exprTime, userMember} = responseData.data;

            

        })
        .catch((error)=>{
            alert("로그인에 실패했습니다.");

        });
            

    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: "50vw" }}>
            <CardContent>
                <Box>
                    <TextField
                        fullWidth
                        label="아이디"
                        type="text"
                        variant="standard"
                        onChange={(e) => { setUserId(e.target.value) }}>

                    </TextField>
                    <TextField
                        fullWidth
                        label="비밀번호"
                        type="password"
                        variant="standard"
                        onChange={(e) => { setUserPassword(e.target.value) }}>

                    </TextField>
                </Box>
            </CardContent>
            <CardActions>
                <Button fullWidth onClick={() => SignInHandler()} variant="contained">로그인</Button>
            </CardActions>
        </Card>
    )
}
