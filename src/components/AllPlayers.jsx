import { useState, useEffect } from "react";
import React from "react";
export default function AllPlayers() {
    const [puppyPlayers, setPuppyPlayers] = useState("")
    // const [playerName, setPlayerName] = useState("")
    useEffect(() => {
        async function fetchAllPlayers() {

            try {
                const response = await fetch(
                    "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-A/players"
                );
                const result = await response.json();
                setPuppyPlayers(result.data.players)
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllPlayers();
    }, []);
                

    console.log(puppyPlayers);
    console.log(puppyPlayers.name);
    // console.log(puppyPlayers.data);

    return (
        <>
        </>
    )
}