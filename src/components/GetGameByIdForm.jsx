import { TextField, Button } from "@mui/material"

function CreateGameForm () {
    return (
        <>
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="ID" variant="outlined"></TextField>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success"> 
                Go
            </Button>
        </>
    )
}

export default CreateGameForm