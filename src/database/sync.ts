import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync';
import { supabase } from '../lib/supabase';
import { database } from './index';

export async function syncDatabase() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      console.log('[🍉 ⬇️] Pulling changes', { lastPulledAt });

      return { changes: {}, timestamp: Date.now() };

      const { data, error } = await supabase.rpc('pull', {
        last_pulled_at: lastPulledAt,
      });

      console.log('[🍉 ⬇️] Error: ', error);

      const { changes, timestamp } = data as {
        changes: SyncDatabaseChangeSet;
        timestamp: number;
      };

      return { changes, timestamp };
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      console.log('[🍉 ⬆️] Pushing changes', JSON.stringify(changes));

      const { error } = await supabase.rpc('push', { changes });

      console.log('[🍉 ⬆️] Error: ', error);
    },
    sendCreatedAsUpdated: true,
  });
}
