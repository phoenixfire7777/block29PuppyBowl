import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div id="navbar">
        <Link to="/"> AllPlayers </Link>
        <Link to="/NewPlayerForm"> New Player Form </Link>
        <Link to="/SinglePlayer"> Single Player </Link>
      </div>
    )
}