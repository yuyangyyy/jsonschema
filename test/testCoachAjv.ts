import * as coachs from "../schemas/coachs.json";
import * as testCoachs from "../data/testCoachs.json";

import Ajv from "ajv"

const ajv = new Ajv()

const validate = ajv.compile(coachs)

function testCoach(data: unknown) {

    const validCoache = validate(data)

    if (validCoache) {
        console.log("coucoucou")

    } else {
        console.log("ca ne marche pas pas pas")
    }
}

testCoach(testCoachs)