import { TextField, Button } from "@mui/material"
import React, { useState } from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import axios from '../config/axios.js'

function GetGame() {
    const [id, setId] = useState('')
    const [games, setGames] = useState([])


    const getGame = async () => {
        try {
            const response = await axios.get(`/games/${id}`)
            const responseData = Array.isArray(response.data.game) ? response.data.game : [response.data.game]
            setGames(responseData);
        } catch (e) {
            console.log(e)
        }
    }

    const getGames = async () => {
        try {
            const response = await axios.get(`/games`)
            console.log("hola"); // Agrega esto para verificar la respuesta
            setGames(response.data.games);
        } catch (e) {
            console.log(e)
        }
    }

    console.log(games)

    return (
        <>
            <h1>Get Game</h1>
            <p>If you want to get one game, type its ID, otherwise, click on 'Get All'</p>
            
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="id" variant="outlined" onChange={(event) => setId(event.target.value)}></TextField>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success" onClick={() => getGame(id)}> 
                Go
            </Button>

            <Button style = {{marginTop: '20px', marginLeft: '20px'}} variant="contained" color="success" onClick={() => getGames()}>
                Get All
            </Button>
            
            <Table style={{marginTop: '40px'}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.map((game) => (
                        <TableRow key={game.ID}>
                            <TableCell>{game.ID}</TableCell>
                            <TableCell>{game.name}</TableCell>
                            <TableCell>{game.type}</TableCell>
                            <TableCell>{game.year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default GetGame