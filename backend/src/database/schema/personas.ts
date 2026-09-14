import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const personas = pgTable('personas', {
    id: uuid('id').defaultRandom().primaryKey(),

    name: varchar('name', {
        length: 100,
    }).notNull(),

    avatarUrl: varchar('avatar_url', {
        length: 500,
    }),

    description: text('description'),

    systemPrompt: text('system_prompt'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
});
