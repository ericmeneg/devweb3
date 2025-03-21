import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ){};
  
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({id});
  }


  //o nest automaticamente faz await no statement return, porém para qualquer outra função assíncrona é necessário escrever o await e async
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usúario não encontrado')
    }

    // a função merge (do typeorm) pega tudo que existe nos dois parâmetros, e substitui no primeiro tudo o que também existe no segundo
    this.usersRepository.merge(user, updateUserDto)
    return this.usersRepository.save(user)
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
