// db.js
import postgres from 'postgres'
import { DATABASE_URL } from '$env/static/private'

const db = postgres(DATABASE_URL)

export default db