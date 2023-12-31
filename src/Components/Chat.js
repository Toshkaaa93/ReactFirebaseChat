import { useContext, useState } from "react";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);

  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(//хук для получения сообщений
    firestore.collection("messages").orderBy("createdAt")//параметром принимает запрос. orderBy-сортировка по полю создания сообщения
  );

  const sendMessage = async () => {//функция отправки сообщения
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //дата отправки сообщения
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid gray",
            overflowY: "auto",
            marginTop: "10px",
          }}
        >
          {messages.map(message=>
            <div style={{
              margin:10,
              border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
              marginLeft: user.uid === message.uid ? 'auto' : '10px',
              width: 'fit-content',
              padding: '5px'}}>
              <Grid container>
                <Avatar src={message.photoURL}/>
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>)}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          style={{ width: "80%" }}
        >
          <TextField
            value={value}
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            style={{ marginTop: "10px" }}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            variant={"outlined"}
            style={{ marginTop: "10px",width:'100px',textAlign:'center'}}
            onClick={sendMessage}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
