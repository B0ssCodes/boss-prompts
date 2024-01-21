import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request) => {
    try{
        await connectToDB();
        console.log("Fetching all prompts");
        const prompts = await Prompt.find({}).populate('creator');
        
        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store', // Disable caching
        };
        console.log("Successfully fetched all prompts");
        return new Response(JSON.stringify(prompts), {
            status: 200,
            headers: headers,
        });
    } catch(error){
        return new Response("Failed to fetch all prompts", { status: 500 }) 
    }
}