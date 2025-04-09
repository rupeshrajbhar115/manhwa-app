import { OpenAI } from 'openai'
import { writeFile, unlink } from 'fs/promises'
import path from 'path'
import { NextResponse } from 'next/server'
import formidable from 'formidable'
import { Readable } from 'stream'



// Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Convert Web Request to Node-style IncomingMessage
async function toNodeRequest(request) {
  const body = await request.arrayBuffer()
  const stream = Readable.from(body)
  const req = Object.assign(stream, {
    headers: Object.fromEntries(request.headers),
    method: request.method,
    url: request.url,
  })
  return req
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(webRequest) {
    debugger
  const req = await toNodeRequest(webRequest)

  const form = formidable({ multiples: false })

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err)

      const image = files.image
      const tempPath = image[0].filepath

      try {
        const result = await openai.images.edit({
          image: require('fs').createReadStream(tempPath),
          prompt:
            'Create a manhwa-style (Korean webtoon) version of this image. Clean lines, vibrant colors, expressive character design.',
          n: 1,
          size: '1024x1024',
          response_format: 'url',
        })

        await unlink(tempPath)

        resolve(NextResponse.json({ url: result.data[0].url }))
      } catch (e) {
        reject(NextResponse.json({ error: 'Failed to generate image' }))
      }
    })
  })
}
