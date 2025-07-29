import {
  GoogleGenAI,
} from '@google/genai';

async function main(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_API_KEY,
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex: number = 0;
  let result = '';
  for await (const chunk of response) {
    console.log(chunk.text);
    result += chunk.text;
  }

  return result;
}

export default main;
