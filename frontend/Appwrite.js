import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66934e88001ce5258820');

export const databases = new Databases(client);
export const account = new Account(client);
export { ID } from 'appwrite';