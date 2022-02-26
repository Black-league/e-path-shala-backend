import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const {MongoClient} = require('mongodb');
async function main() {
	// we'll add code here soon
    const uri = "mongodb+srv://admin:helloWorld@cluster0.5byy8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
    await client.connect();

    await  listDatabases(client);
    }
        catch (e){
            console.error(e)
        } finally{
            await client.close();

        }
    }
main().catch(console.error);


async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

    

