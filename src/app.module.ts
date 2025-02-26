import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ ProjectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [HelloController], // se anida o añade pero dentro de controllers no dentro de imports ya que no es un modulo
})
export class AppModule {}
