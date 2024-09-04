export const config = {
    BASE_ORIGIN: process.env.BASE_ORIGIN || 'http://localhost:3000' as string,
    database: {
        URL: process.env.MONGODB_URL as string,
        APPNAME: process.env.MONGODB_APPNAME as string,
        USERNAME: process.env.MONGODB_USERNAME as string,
        PASSWORD: process.env.MONGOTDB_PASSWORD as string,
        CONNECTION_URI: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGOTDB_PASSWORD}>@${process.env.MONGODB_URL}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APPNAME}`
    }
}

export type Config = typeof config;