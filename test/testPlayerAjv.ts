

import Ajv from "ajv"


import { parseSchema } from "./schema"
import { parseTestSchema } from "./testSchema"


const ajv = new Ajv()

const parseSchemaPlayer = parseSchema('players')
if (!parseSchemaPlayer) {
    console.log('stop program')
    process.exit(1)
}
console.log('infoPlayer', parseSchemaPlayer)


const validate = ajv.compile(parseSchemaPlayer)
console.log("dddddd")
// console.log(validate)
const parseTestSchemaPlayer = parseTestSchema('testPlayers')

function testPlayer(data: unknown) {
    console.log('testPlayer333333')

    const validPlayer = validate(data)
    console.log('jdjfjdjfjdfj')

    if (validPlayer) {
        console.log("okokokokok")

    } else {
        console.log("ca ne fonctionne pas du tout" + ajv.errorsText(validate.errors))
    }
}

testPlayer((parseTestSchemaPlayer))