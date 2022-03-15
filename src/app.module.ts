import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthorModule } from './modules/author/author.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './lib/prisma/prisma.module';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    UserModule,
    AuthorModule,
    PrismaModule,
    PostModule,
  ],
})
export class AppModule {}
