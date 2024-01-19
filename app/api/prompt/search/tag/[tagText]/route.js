import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request, {params}) => {
    try{
        await connectToDB();

        const { tagText } = params;
        const prompts = await Prompt.find({ tag: tagText }).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch(error){
        return new Response("Failed to fetch prompts", { status: 500 }) 
    }
}
