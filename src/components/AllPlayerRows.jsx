export default function AllPlayerRows({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
          setSelectedPlayerId(player.id);
          console.log(setSelectedPlayer)
  
        }}
      >
        <td>{player.name}</td>
        
      </tr>
      
    );
  }