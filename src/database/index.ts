import { Database } from '@nozbe/watermelondb';
import { adapter } from './adapter';
import Profile from './model/Profile';
import Draft from './model/Draft';
import Post from './model/Post';

export const database = new Database({
  adapter,
  modelClasses: [Profile, Draft, Post],
});
