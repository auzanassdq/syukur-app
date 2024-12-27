import { pgTable, text, integer } from 'drizzle-orm/pg-core'

export const syukurTable = pgTable('syukur', {
  id: text('id').primaryKey(),
  user_email: text('user_email').notNull(), // perhatikan: menggunakan snake_case
  syukur: text('syukur').notNull(),
  color: text('color').notNull(),
  report: integer('report').default(0),
  created_at: text('created_at').notNull() // perhatikan: menggunakan snake_case
})