import OpenAI from "openai";
import * as fs from 'fs'; // interop = trueをすることで下の書き方ができるようになる
import * as path from 'path'
// import fs from 'fs'
// import path from 'path'

export class Client {
    private _client: OpenAI;

    constructor(private client: OpenAI) {
        this._client = client
    }

    async stream_response(path: string) {
        const b64Image = fs.readFileSync(path, {
            encoding: "base64"
        })
        const stream = await this._client.chat.completions.create(
            {
                messages: [
                    {
                        role: 'user', 
                        content: [
                            {
                                type: "text",
                                text: "画像の内容を教えて"
                            },
                            {
                                type: "image_url",
                                "image_url": {
                                    "url": `data:image/png;base64,${b64Image}`
                                }
                            }
                        ]
                    }
                ],
                model: "gpt-4o-mini",
                stream: true
            }
        )

        for await( const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || '')
        }
        process.stdout.write('\n')
    }
}