import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    //salt: valor único utilizado no hash que previne o uso de "dicionários" de senhas comuns usando algoritmos de hash populares, pode ser baseado em informações do usuário específico (como ID, data e hora da criação do usuário, etc...) ou um único salt para o sistema inteiro dentro do arquivo .env
    const salt = createUserDto.email + '-'; // nesse caso o salt é o email da pessoa, seguido de -
    const password = await bcrypt.hash(salt + createUserDto.password, 10); // adicionamos o salt aqui
    const user = this.usersRepository.create({ ...createUserDto, password });
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email }); // aqui {email} é igual a {email: email}
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  //o nest automaticamente faz await no statement return, porém para qualquer outra função assíncrona é necessário escrever o await e async por conta do tempo de resposta do banco
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    // a função merge (do typeorm) pega tudo que existe nos dois parâmetros, e substitui no primeiro tudo o que também existe no segundo
    this.usersRepository.merge(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
