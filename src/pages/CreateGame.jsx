import { TextField, Button } from "@mui/material";
import React, { useState } from 'react';
import axios from '../config/axios.js';
import Swal from 'sweetalert2'; // Importa SweetAlert

function CreateGame() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const createGame = async () => {
        try {
            await axios.post(`/games`, {
                Name: name,
                Type: type,
                Year: year
            });
            
            // Muestra el mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Game Created!',
                text: `The game ${name} has been successfully created.`,
            });
        } catch (e) {
            console.log(e);
            // Muestra el mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error creating the game. Please try again.',
            });
        }
    };

    return (
        <>
            <h1>Create Game</h1>
            <p>Type the name, genre and year of the game</p>

            <div style={{ marginTop: '50px' }} className="container-md">
                <form>
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
            <Button style={{ marginTop: '20px' }} variant="contained" color="success" onClick={createGame}>
                Go
            </Button>
        </>
    );
}

export default CreateGame;
