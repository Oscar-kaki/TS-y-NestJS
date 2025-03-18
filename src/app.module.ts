import { Module } from '@nestjs/common';


@Module({
  imports: [ ], //modulos
  controllers: [], // se anida o añade pero dentro de controllers no dentro de imports ya que no es un modulo
})
export class AppModule {}
