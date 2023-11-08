import { Database } from '@nozbe/watermelondb';
import { adapter } from './adapter';
import Profile from './model/Profile';

const database = new Database({
  adapter,
  modelClasses: [Profile],
});
