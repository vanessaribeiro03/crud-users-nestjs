import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { Messages } from 'src/utils/message.utils';
import { Regex } from 'src/utils/regex.utils';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: Messages.EMPTY_FIELD })
  @Matches(Regex.fullName, { message: Messages.NAME_INVALID })
  name: string;

  @IsNotEmpty({ message: Messages.EMPTY_FIELD })
  @IsEmail({}, { message: Messages.EMAIL_INVALID })
  @Matches(Regex.email, { message: Messages.EMAIL_INVALID })
  email: string;

  @IsNotEmpty({ message: Messages.EMPTY_FIELD })
  @Matches(Regex.password, { message: Messages.PASSWORD_INVALID })
  password: string;
}
