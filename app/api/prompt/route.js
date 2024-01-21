export const GET = async (request) => {
    try{
        const db = await connectToDB();
        console.log('DB:', db);

        const prompts = await Prompt.find({}).populate('creator');
        console.log('Prompts:', prompts);

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch(error){
        console.log('Error:', error);
        return new Response("Failed to fetch all prompts", { status: 500 }) 
    }
}