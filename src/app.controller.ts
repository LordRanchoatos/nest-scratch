import { Controller, Get} from '@nestjs/common';

@Controller()
export class AppController{
    @Get()
    getRoute(){
        return 'Hi there!!!';
    }
}