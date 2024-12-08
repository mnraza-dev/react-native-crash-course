
import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.reactnative.aora',
    projectID: '668e034a003ce5951642',
    databaseId: '668e048c003a842eccd1',
    usersCollectionId: '668e04b5001183d42427',
    videosCollectionId: '668e04d90010033ab9d0',
    storageId: '668e08cf002693f58823'


}

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectID)
    .setPlatform(config.platform);


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);;


export async function login(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session

    } catch (error) {
        console.log(error);
        throw new Error(error)

    }
}

export async function register(email, password, username) {

    try {
        const newAccount = await account.create(ID.unique(), username, email, password);

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);
        await login(email, password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatars: avatarUrl
    
            }
    
        )
        return newUser

    } catch (error) {
        console.log(error);
        throw new Error(error)

    }
   
   
}


