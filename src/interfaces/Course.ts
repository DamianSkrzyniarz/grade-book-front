import {Teacher} from "./Teacher.ts";

export interface Course{
    name?: string
    type?: string
    teacher?: Teacher
    ects?: number
    hours?: number
    description?: string
}
