import { FirebaseModule } from './firebase';
import { MainModule } from './main/main.module';
import { SecondModule } from './second-page/second.module';

export const CORE_MODULES = [
  FirebaseModule,
  MainModule,
  SecondModule
]