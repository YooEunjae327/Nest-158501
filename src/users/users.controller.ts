import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
  }
}
