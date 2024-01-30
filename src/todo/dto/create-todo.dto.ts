import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTodoDto {
    @IsOptional()
    @IsNumber()
    id: number

    @IsOptional()
    @IsString()
    heading: string

    @IsOptional()
    @IsString()
    body: string

    @IsOptional()
    @IsBoolean()
    isComplited: boolean
}
