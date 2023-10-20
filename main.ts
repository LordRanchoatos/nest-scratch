import { Controller, Module, Get} from '@nestjs/common';
import  { NestFactory } from '@nestjs/core'

@Controller()
class AppController{
    @Get()
    getRoute(){
        return 'Hi there!';
    }
}

@Module({
    controllers: [AppController]
})
class AppModule{}

async function bootstrap(){
    const app = await NestFactory.create(AppModule);
    await app.listen(8000);
}

bootstrap()