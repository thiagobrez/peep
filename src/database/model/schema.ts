import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'profiles',
      columns: [
        { name: 'default_platform', type: 'string' },
        { name: 'x_auth_token', type: 'string', isOptional: true },
        { name: 'bluesky_auth_token', type: 'string', isOptional: true },
        { name: 'lens_auth_token', type: 'string', isOptional: true },
        { name: 'farcaster_auth_token', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'drafts',
      columns: [
        { name: 'profile_id', type: 'string', isIndexed: true },
        { name: 'is_x_enabled', type: 'boolean' },
        { name: 'is_bluesky_enabled', type: 'boolean' },
        { name: 'is_lens_enabled', type: 'boolean' },
        { name: 'is_farcaster_enabled', type: 'boolean' },
        { name: 'x_live_url', type: 'string', isOptional: true },
        { name: 'bluesky_live_url', type: 'string', isOptional: true },
        { name: 'lens_live_url', type: 'string', isOptional: true },
        { name: 'farcaster_live_url', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'posts',
      columns: [
        { name: 'draft_id', type: 'string', isIndexed: true },
        { name: 'platform_name', type: 'string' },
        { name: 'sequence', type: 'number' },
        { name: 'body', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});
