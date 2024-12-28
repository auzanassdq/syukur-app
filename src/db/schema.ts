import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'

export const syukurTable = pgTable('syukur', {
  id: text('id').primaryKey(),
  user_email: text('user_email').notNull(), // perhatikan: menggunakan snake_case
  syukur: text('syukur').notNull(),
  color: text('color').notNull(),
  report: integer('report').default(0),
  created_at: timestamp('created_at').defaultNow() // perhatikan: menggunakan snake_case
})