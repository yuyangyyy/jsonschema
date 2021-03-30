import {Member as Member } from "./members"

interface Player extends Member{
    age: number;
    hobbies : string;
    email: string;
    memebers_id: string;
}

const propertiesPlayers:Player = {
    id:4,
    name:"jdifh",
    age: 23,
    hobbies : "swiming",
    email: "titi@gmail.com",
    memebers_id: "13GR",
    licence: true,
    registrationDate:"2000-11-12",
    clubsID: "456"


}

console.log ( propertiesPlayers)