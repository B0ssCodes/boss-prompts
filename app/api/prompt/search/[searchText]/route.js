import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';
import User from '@models/user'; // Import the User model

export const GET = async (request, { params }) => {
    try{
        await connectToDB();

        const { searchText } = params;
        const regex = new RegExp(searchText, 'i'); // 'i' makes it case insensitive

        // Find users with the matching username
        const users = await User.find({ username: { $regex: regex } });

        // Find prompts with the matching prompt or tag
        const prompts = await Prompt.find({
            $or: [
                { prompt: { $regex: regex } },
                { tag: { $regex: regex } }
            ]
        }).populate('creator');

        // Find prompts created by the users with the matching username
        const userPrompts = await Prompt.find({
            creator: { $in: users.map(user => user._id) }
        }).populate('creator');

        // Combine the results
        const combinedPrompts = [...prompts, ...userPrompts];

        if(!combinedPrompts.length) {
            return new Response("No prompts found", { status: 404 })  
        }

        return new Response(JSON.stringify(combinedPrompts), {
            status: 200
        })
    } catch(error){
        return new Response("Failed to fetch prompts", { status: 500 }) 
    }
}