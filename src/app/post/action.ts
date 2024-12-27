'use server'

import { db } from '@/db'
import { syukurTable } from '@/db/schema'
import { v4 as uuidv4 } from 'uuid'

export async function submitSyukur(email: string, syukurText: string) {
  try {
    await db.insert(syukurTable).values({
      id: uuidv4(),
      user_email: email, // perhatikan: menggunakan snake_case
      syukur: syukurText,
      report: 0,
      created_at: new Date().toISOString() // perhatikan: menggunakan snake_case
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting syukur:', error)
    return { success: false, error: 'Terjadi kesalahan saat menyimpan data' }
  }
}