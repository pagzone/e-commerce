export const config = {
    BASE_ORIGIN: process.env.BASE_ORIGIN || 'http://localhost:3000' as string,
    database: {
        URL: process.env.MONGODB_URL as string,
    }
}

export type Config = typeof config;