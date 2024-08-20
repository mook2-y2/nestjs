import { Controller, Get, Param, Query, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Index Page' };
  }

  @Get('api')
  api(@Query('text') text: string) {
    console.log(text);
    return { text };
  }
}
