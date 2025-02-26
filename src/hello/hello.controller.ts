import { Controller, Get } from '@nestjs/common';

@Controller() //ruta global necesaria con la que se ejecutan todos los metodos
export class HelloController {

    @Get ('/') //ruta con la que se buscara
    index () {//nombre de la funcion 
        return 'Home page '
    }
    
}
