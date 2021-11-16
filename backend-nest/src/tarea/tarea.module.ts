import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { Tarea } from './tarea.entity'
import { TareaResolver } from './tarea.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Tarea])],
  providers: [TareaService, TareaResolver]
})
export class TareaModule {}
