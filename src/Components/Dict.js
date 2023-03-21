import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";


export const Dict: React.FC = () => {

 const [word, setWord] = useState("");
 const [newword,setNewword] =useState([])

 const handlechange=()=>{
  setNewword([...newword,word])
  setWord("")
 }

 //  const handleDeleteTodo = (index) => {
 //   const newTodos = [...todos];
 //   newTodos.splice(index, 1);
 //   setTodos(newTodos);
 // };

  return (
    <div className="mainclass">
      <Typography variant="h2" style={{ margin: 12 }} >
        Word Hunt
      </Typography>
      <TextField
        onChange={(e) => setWord(e.target.value)}
        value={word}
        id="word"
        placeholder="Type The Word"
        variant="outlined"
      />
      <Button variant="contained" color="primary"  onClick={(e) => handlechange()}>Add
      </Button>
 <div>
  {
    newword.map((el)=>(
      <li>
        {el}
      </li>
    ))
  }
 </div>    
    </div>
  );
};
