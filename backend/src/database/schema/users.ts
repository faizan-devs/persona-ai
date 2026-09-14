import { pgTable, uuid, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),

    email: varchar('email', {
        length: 255,
    })
        .notNull()
        .unique(),

    name: varchar('name', {
        length: 100,
    }),

    avatarUrl: varchar('avatar_url', {
        length: 500,
    }),

    createdAt: timestamp('created_at').defaultNow().notNull(),
});
