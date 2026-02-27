import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/entity/user.entity';
import { type UserRepository } from '../domain/repositories/user.repository';
@Injectable()
export class CreateUseCase {
  //Utilizo mi interfaz de repository con las funciones del crud, en este caso crear
  constructor(
    @Inject('UserRepository') private readonly userRepo: UserRepository,
  ) {}
  async execute(data: {
    email: string;
    password: string;
    name: string;
    photo?: string;
    description?: string;
    city?: string;
  }) {
    //Primero verifico que el usuario no exista por medio de su correo para proceder a crearlo

    const findUser = await this.userRepo.getUserByEmail(data.email);
    if (findUser) {
      throw new ConflictException('The user already exist');
    }
    const user = User.create(data);
    return this.userRepo.createUser(user);
  }
}
