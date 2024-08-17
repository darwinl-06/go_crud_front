import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';

function Home() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <h1>
        Welcome!
      </h1>
      <h2>
        This is a CRUD for games
      </h2>
      <div class="container-md">
        <Link to="/create">
          <Button style={ {marginRight: '10px'} } variant="contained">Create</Button>
        </Link>
        
        <Link to="/get">
          <Button style={ {marginRight: '10px'} } variant="contained">Get</Button>
        </Link>

        <Link to="/update">
          <Button style={ {marginRight: '10px'} } variant="contained">Update</Button>
        </Link>

        <Link to="/delete">
          <Button style={ {marginRight: '10px'} } variant="contained">Delete</Button>
        </Link>
      </div>
      </>
    )
  }
  
  export default Home