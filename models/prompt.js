import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.']
    },
    
    tag: {
        type: String,
        required: [true, 'Tag is required.']
    
    }
});

// Add a text index to the 'prompt' and 'tag' fields
PromptSchema.index({ prompt: 'text', tag: 'text' });

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;