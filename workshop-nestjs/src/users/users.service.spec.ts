import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn()
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('Deve retornar um array de Users', async () => {
      const users = [
        { id: 1, name: 'Teste', email: 'teste@teste.com', password: 'teste' },
        {
          id: 2,
          name: 'teste2',
          email: 'teste2@teste2.com',
          password: 'teste2',
        },
      ];

      mockRepository.find.mockResolvedValue(users);
      const result = await service.findAll();
      expect(result).toEqual(users);
    });
  });

  describe('findOneByEmail', () => {
    it('Deve retornar um User pelo email', async () => {
      const user = {
        id: 1,
        name: 'Teste',
        email: 'email@email.com',
        password: 'teste',
      };
      mockRepository.findOneBy.mockResolvedValue(user);

      const result = await service.findOneByEmail('email@email.com');
      expect(result).toEqual(user);
    });
  });

  describe('create', () => {
    it('Deve criar um novo usuário', async () => {
      const createUserDto: CreateUserDto = {
        name: 'nomepessoa',
        email: 'emailpessoa@email.com',
        password: 'senha12345',
      };

      const hashSenha = 'senhaHash';
      jest.spyOn(bcrypt, 'hash').mockResolvedValue(hashSenha);
      const user = { id: 1, ...createUserDto, password: hashSenha };

      mockRepository.create.mockResolvedValue(user);
      mockRepository.save.mockResolvedValue(user);

      const result  = await service.create(createUserDto);
      expect(result).toEqual(user)
    });
  });
});
