import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [QuestModule, LocationModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
