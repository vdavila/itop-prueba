import { Query, Resolver } from "@nestjs/graphql";
import { TareaService } from "./tarea.service";

@Resolver()
export class TareaResolver {
    constructor(private tareaService: TareaService) {}

    //Queries
    @Query(() => String)
    getStuff() {
        return 'This is working'
    }
}