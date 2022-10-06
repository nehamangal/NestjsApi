import { Module } from "@nestjs/common";
import { productModule } from "products/products.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
@Module({
    imports:[productModule],
    controllers:[AppController],
    providers:[AppService], 
})
export class AppModule{
    

}