import { pgTable, uuid, text, varchar, timestamp, integer } from 'drizzle-orm/pg-core';

import { conversations } from './conversations.js';
import { personas } from './personas.js';

export const messages = pgTable('messages', {
    id: uuid('id').defaultRandom().primaryKey(),

    conversationId: uuid('conversation_id')
        .notNull()
        .references(() => conversations.id, {
            onDelete: 'cascade',
        }),

    personaId: uuid('persona_id')
        .notNull()
        .references(() => personas.id),

    role: varchar('role', {
        length: 20,
    }).notNull(),

    content: text('content').notNull(),

    model: varchar('model', {
        length: 100,
    }),

    inputTokens: integer('input_tokens'),

    outputTokens: integer('output_tokens'),

    totalTokens: integer('total_tokens'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
});
