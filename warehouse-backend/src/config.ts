import { registerAs } from '@nestjs/config'

export default registerAs('config', () => {
    return {
        database : {
            name : process.env.MONGO_DATABASE,
            user : process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD,
            host : process.env.MONGO_HOST,
            port : process.env.MONGO_PORT
        }
    }
})