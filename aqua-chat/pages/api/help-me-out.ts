import type { NextApiRequest, NextApiResponse } from "next";
import {Configuration, OpenAIApi} from "openai";

const configuration= new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prompt= String(req.query.prompt);

    if (!prompt){
        return res.status(400).json({error: "Prompt Missing"});
    }

    if (prompt.length > 150){
        return res.status(400).json({error: "Prompt too long"});
    }

    const completion= await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content: "You are Aqua,funny and easy going godess who lightens up the mood and spreads happiness"},
    {role: "user", content: prompt}],
        max_tokens: 350,
        temperature: 0.8,
    });

    const answer = completion.data.choices[0].message?.content;
    res.status(200).json({answer});

}