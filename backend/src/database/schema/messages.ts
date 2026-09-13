import { pgTable, uuid, text, varchar, timestamp } from 'drizzle-orm/pg-core';

import { conversations } from './conversations.js';

export const messages = pgTable('messages', {
    id: uuid('id').defaultRandom().primaryKey(),

    conversationId: uuid('conversation_id')
        .notNull()
        .references(() => conversations.id),

    role: varchar('role', {
        length: 20,
    }).notNull(),

    content: text('content').notNull(),

    createdAt: timestamp('created_at').defaultNow().notNull(),
});
