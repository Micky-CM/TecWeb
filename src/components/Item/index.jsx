import { Paper, Button } from '@mui/material'

function Item(props)
{
    return (
        <Paper style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <img src={props.item.image} alt={props.item.title} style={{width:"80%", height:"70vh", objectFit:"cover"}}/>
            <Button variant="contained" style={{width:"250px", height:"50px",marginTop:"10px"}}>
                Explorar
            </Button>
            <h2 style={{fontSize:"32px", fontWeight:"bold", margin:"10px"}}>{props.item.title}</h2>


        </Paper>
    )
}

export default Item