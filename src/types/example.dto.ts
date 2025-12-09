import { IsString, Length, IsOptional, IsIn } from "class-validator";

export class ExampleDTO {
  @IsString()
  @Length(1, 50)
  algo!: string;

  @IsOptional()
  @IsIn(["opt1", "opt2", "opt3"])
  selectOpt?: string;
}
