import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const personas = pgTable('personas', {
    id: uuid('id').defaultRandom().primaryKey(),

    name: varchar('name', {
        length: 100,
    }).notNull(),

    slug: varchar('slug', {
        length: 50,
    })
        .notNull()
        .unique(),

    avatarUrl: varchar('avatar_url', {
        length: 500,
    }),

    description: text('description'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
});
