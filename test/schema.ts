import * as fs from 'fs'

export function parseSchema(schemaName: string): object | boolean {
    try {
        const schema = fs.readFileSync(`./schemas/${schemaName}.json`, 'utf8');
        const parsedSchema = JSON.parse(schema) as object
        return parsedSchema
    } catch (err) {
        console.error('Unable to parse the schema', err)
        return false
    }
}