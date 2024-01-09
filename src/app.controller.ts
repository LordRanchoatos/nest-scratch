import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('')
  getRoute() {
    return 'Hi there!!!';
  }

  @Get('/info')
  getInfo() {
    return 'Contact us on Disord.';
  }
}
