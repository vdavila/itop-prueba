import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Tarea {

  @PrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  finished = new Date();

  @Property()
  priority!: string;

  @Property()
  state!: string;

  @Property()
  age?: number;

}