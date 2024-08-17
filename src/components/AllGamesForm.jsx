import { TextField, Button } from "@mui/material"

function AllGamesForm () {
    return (
        <>
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="ID" variant="outlined"
                    style={{marginRight: '20px'}} />

                    <TextField id="outlined-basic" label="Name" variant="outlined"
                    style={{marginRight: '20px'}} />
                    
                    <TextField id="outlined-basic" label="Type" variant="outlined" />

                    <TextField id="outlined-basic" label="Year" variant="outlined" />
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success"> 
                Go
            </Button>
        </>
    )
}

export default AllGamesForm