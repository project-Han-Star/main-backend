import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'User email' })
  @IsNotEmpty()
  @IsString()
  useremail: string;

  @ApiProperty({ description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterDto {
  @ApiProperty({ description: 'User email' })
  @IsNotEmpty()
  @IsString()
  useremail: string;

  @ApiProperty({ description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: 'True if the user is a lawyer' })
  @IsNotEmpty()
  @IsBoolean()
  islawyer: boolean;
}
