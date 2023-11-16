import { Model } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  readonly,
} from '@nozbe/watermelondb/decorators';

export default class Profile extends Model {
  static table = 'profiles';

  static associations = {
    drafts: { type: 'has_many', foreignKey: 'profile_id' },
  } as const;

  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;

  @children('drafts') drafts;
  @field('default_platform') defaultPlatform;
  @field('x_auth_token') xAuthToken;
  @field('bluesky_auth_token') blueskyAuthToken;
  @field('lens_auth_token') lensAuthToken;
  @field('farcaster_auth_token') farcasterAuthToken;
}
