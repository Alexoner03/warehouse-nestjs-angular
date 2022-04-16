import {Global, Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import config from "../config";
import {ConfigType} from "@nestjs/config";

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            async useFactory(configService: ConfigType<typeof config>) {
                const {name,password,port,user,host} = configService.database
                return {
                    uri: `mongodb://${host}:${port}`,
                    user,
                    pass : password,
                    dbName : name,
                }
            },
            inject: [config.KEY]
        })
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
