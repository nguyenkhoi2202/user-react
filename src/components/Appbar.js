import { Container, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

  }));

export default function Appbar() {

  const[username, setUserName] =React.useState('')
  const[password, setPassword] =React.useState('')
  const[fullname, setFullname] =React.useState('')
  const[email, setEmail] =React.useState('')
  const[phonenumber, setPhonenumber] =React.useState('')
  const[users, setUsers]= React.useState([])
  const classes = useStyles();

  const handleClick=(e) =>{
      e.preventDefault()
      const users = {username, password,fullname,email,phonenumber}
      fetch("http://localhost:8080/api/users",{
          method:"POST",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify(users)
        
      }).then(()=>{
          console.log("added")
      })
}
    

  

  return (
    <Container>
       
    <form>
          <label for="fname">Username:</label><br/>
          <input type="text" id="fname" name="fname"
           value={username}
           onChange={(e)=>setUserName(e.target.value)}
           /> <br/>
          <label for="lname">PassWord:</label><br/>
          <input type="password" id="lname" name="lname"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
          /> <br/>
          <label for="lname">FullName:</label><br/>
          <input type="text" id="lname" name="lname" 
           value={fullname}
           onChange={(e)=>setFullname(e.target.value)}
           /> <br/>
          <label for="lname">Email:</label><br/>
          <input type="text" id="lname" name="lname" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br/>
          <label for="lname">Phone:</label><br/>
          <input type="text" id="lname" name="lname" 
          value={phonenumber}
          onChange={(e)=>setPhonenumber(e.target.value)}
          /> <br/> <br/>
          <button type="button" onClick={handleClick}>Save</button>

    </form>
    {username}
    {password}
    {fullname}
    {email}
    {phonenumber}

    </Container>
  );
}
