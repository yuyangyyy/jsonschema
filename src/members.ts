 export interface Member{
    id:number;
    name:string;
    licence:boolean;
    registrationDate:string;
    clubsID:string;
}

const propertiesMember:Member= {
    id: 3,
    name: "steph",
    licence: true,
    registrationDate:"2000-11-12",
    clubsID: "456"
}

console.log(propertiesMember)