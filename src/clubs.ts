export interface Club {

    id: number;
    name: string;
    address: {
        street_type: StreetType
        city: string;
        state: string
    }
    phoneNumber: string

}

enum StreetType {
    street = "street",
    avenue = "avenue",
    boulevard = "boulevard"
}


const propertiesClubs: Club = {
    id: 5,
    name: "john",
    address: {
        street_type: StreetType.street,
        city: "Paris",
        state: "France"

    },
    phoneNumber: "12345678",

}
console.log(propertiesClubs)

export default Club