import { Controller, Get } from '@nestjs/common';

import { ValidRoles } from '../auth/interfaces';
import { Auth } from '../auth/decorators';

import { SeedService } from './seed.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth( ValidRoles.admin )
  executeSeed() {
    return this.seedService.runSeed();
  }
}