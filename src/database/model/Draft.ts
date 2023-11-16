import { Model } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  immutableRelation,
  readonly,
} from '@nozbe/watermelondb/decorators';

export default class Draft extends Model {
  static table = 'drafts';

  static associations = {
    profiles: { type: 'belongs_to', key: 'profile_id' },
    posts: { type: 'has_many', foreignKey: 'draft_id' },
  } as const;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;

  @immutableRelation('profiles', 'profile_id') profile;
  @children('posts') posts;
  @field('is_x_enabled') isXEnabled;
  @field('is_bluesky_enabled') isBlueskyEnabled;
  @field('is_lens_enabled') isLensEnabled;
  @field('is_farcaster_enabled') isFarcasterEnabled;
  @field('x_live_url') xLiveUrl;
  @field('bluesky_live_url') blueskyLiveUrl;
  @field('lens_live_url') lensLiveUrl;
  @field('farcaster_live_url') farcasterLiveUrl;
}
