import { TextField, Button } from "@mui/material";
import axios from '../config/axios';
import { useState } from "react";
import Swal from 'sweetalert2';

function DeleteGame() {
    const [id, setId] = useState('');

    const deleteGame = async () => {
        try {
            await axios.delete(`/games/${id}`);
            
            // Muestra el mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Game Deleted!',
                text: `The game with ID ${id} has been successfully deleted.`,
            });
        } catch (e) {
            console.log(e);
            // Muestra el mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'There was an error deleting the game. Please try again.',
            });
        }
    };

    return (
        <>
            <h1>Delete Game</h1>
            <p>Type the ID of the game you want to delete</p>
            
            <div style={{ marginTop: '50px' }} className="container-md">
                <form>
                    <TextField 
                        id="outlined-basic" 
                        label="ID" 
                        variant="outlined" 
                        onChange={(event) => setId(event.target.value)} 
                    />
                </form>
            </div>
            <Button 
                style={{ marginTop: '20px' }} 
                variant="contained" 
                color="error" // Cambia el color a rojo para reflejar la acción de eliminar
                onClick={deleteGame}
            > 
                Delete
            </Button>
        </>
    );
}

export default DeleteGame;
