import {
  Get,
  Put,
  Post,
  Body,
  Controller,
  UseInterceptors,
  SerializeOptions,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  UserEntity,
  extendedUserGroupsForSerializing,
} from './serializers/user.serializer';
import { User } from './decorators/user.decorator';
import CreateUserDto from './dto/createUser.dto';
import EditUserDto from './dto/editUser.dto';
import { UsersService } from './users.service';

@Controller('users')
@SerializeOptions({
  groups: extendedUserGroupsForSerializing,
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async get(@User() user: UserEntity): Promise<UserEntity> {
    return user;
  }
  @Post('/')
  @UseInterceptors(ClassSerializerInterceptor)
  async create(@Body() inputs: CreateUserDto): Promise<UserEntity> {
    return await this.usersService.create(inputs);
  }
  @Put('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(
    @User() user: UserEntity,
    @Body() inputs: EditUserDto,
  ): Promise<UserEntity> {
    return await this.usersService.update(user, inputs);
  }
}
