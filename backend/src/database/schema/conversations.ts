import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

import { users } from './users.js';
import { personas } from './personas.js';

export const conversations = pgTable('conversations', {
    id: uuid('id').defaultRandom().primaryKey(),

    userId: uuid('user_id')
        .notNull()
        .references(() => users.id, {
            onDelete: 'cascade',
        }),

    personaId: uuid('persona_id')
        .notNull()
        .references(() => personas.id),

    title: varchar('title', {
        length: 255,
    }),

    createdAt: timestamp('created_at').defaultNow().notNull(),

    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
