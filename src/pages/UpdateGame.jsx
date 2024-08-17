import { TextField, Button } from "@mui/material";
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function UpdateGame() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const updateGame = async () => {
        try {
            await axios.put(`http://localhost:3000/games/${id}`, {
                Name: name,
                Type: type,
                Year: year,
            });
            
            // Muestra el mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Game Updated!',
                text: `The game with ID ${id} has been successfully updated.`,
            });
        } catch (e) {
            console.log(e);
            // Muestra el mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error updating the game. Please try again.',
            });
        }
    };

    return (
        <>
            <h1>Update Game</h1>
            <p>Type the ID of the game you want to update and the details you want to change</p>
            
            <div style={{ marginTop: '50px' }} className="container-md">
                <form>
                    <TextField 
                        id="outlined-basic" 
                        label="Id" 
                        variant="outlined" 
                        style={{ marginRight: '20px' }} 
                        onChange={(event) => setId(event.target.value)} 
                    />

                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        style={{ marginRight: '20px' }} 
                        onChange={(event) => setName(event.target.value)} 
                    />
                    
                    <TextField 
                        id="outlined-basic" 
                        label="Genre" 
                        variant="outlined" 
                        style={{ marginRight: '20px' }} 
                        onChange={(event) => setType(event.target.value)} 
                    />

                    <TextField 
                        id="outlined-basic" 
                        label="Year" 
                        variant="outlined" 
                        onChange={(event) => setYear(event.target.value)} 
                    />
                </form>
            </div>
            <Button 
                style={{ marginTop: '20px' }} 
                variant="contained" 
                color="success" 
                onClick={updateGame}
            > 
                Go
            </Button>
        </>
    );
}

export default UpdateGame;
