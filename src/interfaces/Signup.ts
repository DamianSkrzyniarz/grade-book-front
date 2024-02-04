import {Course} from "./Course.ts";
import {Student} from "./Student.ts";

export interface Signup{
    id?: number
    student: Student
    course: Course
    grade?: number
    attempt?: number
    gradeDate?: string
}