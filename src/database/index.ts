import { Database } from '@nozbe/watermelondb';
import { setGenerator } from '@nozbe/watermelondb/utils/common/randomId';
import { v4 as uuidv4 } from 'uuid';
import { adapter } from './adapter';
import Profile from './model/Profile';
import Draft from './model/Draft';
import Post from './model/Post';

export const database = new Database({
  adapter,
  modelClasses: [Profile, Draft, Post],
});

setGenerator(() => uuidv4());
