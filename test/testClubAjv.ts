

import Ajv from "ajv"
import { parseSchema } from "./schema";
import { parseTestSchema } from "./testSchema";

const ajv = new Ajv()


const parseSchemaClub = parseSchema('clubs')

if (!parseSchemaClub) {
    console.log('Stop program')
    process.exit(1)
}

console.log('infoClub', parseSchemaClub)


const validate = ajv.compile(parseSchemaClub)



const parseTestSchemaClub = parseTestSchema('testClubs')
function testClub(data: unknown) {

    const validClub = validate(data)
    console.log('jjjjdddddd')

    if (validClub) {
        console.log("valid ok ca marche validator ajv ")
    } else {
        console.log("invalid nooooooooooo:" + ajv.errorsText(validate.errors))
    }
}

testClub((parseTestSchemaClub))

