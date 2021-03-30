import * as fs from 'fs'

export function parseTestSchema(testSchemaName: string): object | boolean {
    try {

        const testSchema = fs.readFileSync(`./data/${testSchemaName}.json`, `utf8`)
        const parsedTestSchema = JSON.parse(testSchema) as object
        return parsedTestSchema

    } catch (err) {
        console.log('Unable to parse the test schema', err)
        return false


    }
}

