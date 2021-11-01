import Bomber from './assets/bomber.png'

export default function BackgroundImage() {
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"18px", marginBottom:"48px"}}>
            <img src={Bomber} width="200px" height="auto" alt="Nave espacial"></img>
        </div>
    )
}