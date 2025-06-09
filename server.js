/* eslint-disable @typescript-eslint/no-require-imports */
const { spawn } = require('child_process')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT || '3000'
const hostname = process.env.HOST || 'localhost'

const nextStart = spawn('next', ['start', '-p', port, '-H', hostname], {
  stdio: 'inherit',
  shell: true,
})

nextStart.on('error', err => {
  console.error('Failed to start', err)
})
