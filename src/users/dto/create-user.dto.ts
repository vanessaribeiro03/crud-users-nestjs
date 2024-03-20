import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { Messages } from 'src/utils/message.utils';
import { Regex } from 'src/utils/regex.utils';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Matches(Regex.fullName, { message: Messages.NAME_INVALID })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(Regex.password)
  password: string;
}
