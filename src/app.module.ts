import { Module } from '@nestjs/common';
import { PrismaModule } from './lib/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, PrismaModule],
})
export class AppModule {}
