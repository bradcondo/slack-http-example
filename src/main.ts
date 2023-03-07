import { App, LogLevel } from '@slack/bolt'
import { resolve } from 'path'
import { config } from 'dotenv'

config({ path: resolve(__dirname, '.env') })

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  logLevel: LogLevel.DEBUG,
})

;(async () => {
  await app.start(process.env.PORT)
})()

app.message('hello', async ({ message, say }) => {
  console.log(message)
  await say("Hello!")
})
