import { NextRequest, NextResponse } from 'next/server';
import { pineconeIndex } from '@/app/lib/pineconeClient';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const generationConfig = {
  stopSequences: ['red'],
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash', generationConfig });

export async function POST(request: NextRequest) {
  const { query } = await request.json();

  // Vectorize the query using Pinecone
  const vectorResponse = await pineconeIndex.query({
    vector: query, // Here you'd typically pass a vectorized form of the query
    topK: 3,       // Get the top 3 similar vectors
  });

  // Extract relevant information from the vector response
  const matchedData = vectorResponse.matches.map(match => ({
    id: match.id,
    score: match.score,
    metadata: match.metadata,
  }));

  // Construct a prompt using the matched data
  const prompt = `
    Based on the following information about professors:
    ${JSON.stringify(matchedData)}
    Provide insights on the best professor and their qualities.
  `;

  // Generate content using Google Gemini
  const result = await model.generateContent(prompt);

  return NextResponse.json({ insights: result.response.text() }, { status: 200 });
}
