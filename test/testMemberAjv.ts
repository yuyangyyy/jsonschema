

import Ajv from "ajv"

import { parseSchema } from "./schema";
import { parseTestSchema } from "./testSchema"



const ajv = new Ajv()

const parseSchemaMember = parseSchema('members')

const validate = ajv.compile(parseSchemaMember)


const parseTestSchemaMember = parseTestSchema('testMembers')
if (!parseTestSchemaMember) {
    console.log('error stop')
    process.exit(1)
}
console.log('infoMember', parseTestSchemaMember)


function testMember(data: unknown) {

    const validMember = validate(data)

    if (validMember) {
        console.log("cest ok")
    } else {
        console.log("c'est pas valid nonono" + ajv.errorsText(validate.errors))
    }
}
testMember(parseTestSchemaMember)
