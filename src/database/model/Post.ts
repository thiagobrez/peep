import { Model } from '@nozbe/watermelondb';
import { field, immutableRelation, text } from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';

  static associations = {
    drafts: { type: 'belongs_to', key: 'draft_id' },
  } as const;

  @immutableRelation('drafts', 'draft_id') draft;
  @field('platform_name') platformName;
  @field('sequence') sequence;
  @text('body') body;
}
