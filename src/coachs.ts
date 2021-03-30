import { Member } from "./members"

interface Coach extends Member{
    
    age: number;
    phoneNumber: string;
    email:string;
    membersId: string;
}

const propertiesCoach:Coach ={
    id:2,
    name: "doiu",
    age : 33,
    phoneNumber: "324567",
    email: "hapy@gmail.com",
    membersId: "123456",
    licence: true,
    registrationDate:"2000-11-12",
    clubsID: "456"

}

console.log(propertiesCoach)