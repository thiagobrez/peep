import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync';
import { supabase } from '../lib/supabase';
import { database } from './index';

export async function syncDatabase() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      console.log('[🍉 ⬇️] Pulling changes', { lastPulledAt });

      const { data, error } = await supabase.rpc('pull', {
        last_pulled_at: lastPulledAt,
      });

      console.log('[🍉 ⬇️] PROFILES: ', JSON.stringify(data.changes.profiles));
      console.log('[🍉 ⬇️] DRAFTS: ', JSON.stringify(data.changes.drafts));
      console.log('[🍉 ⬇️] POSTS: ', JSON.stringify(data.changes.posts));

      // TODO: PROFILES ARE NOT PULLING?

      if (error) {
        console.log('[🍉 ⬇️] Pull error: ', error);
      } else {
        const { changes, timestamp } = data as {
          changes: SyncDatabaseChangeSet;
          timestamp: number;
        };

        return { changes, timestamp };
      }
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      console.log('[🍉 ⬆️] Pushing changes', JSON.stringify(changes));

      const { error } = await supabase.rpc('push', { changes });

      if (error) {
        console.log('[🍉 ⬆️] Push error: ', error);
      }
    },
    sendCreatedAsUpdated: true,
  });
}
