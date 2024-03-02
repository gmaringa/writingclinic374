import User from '../models/Users.model.js';
import { connectToDB } from '../mongo.js';

export const createOrUpdateUser = async(id, first_name, last_name, profile_image_url, email_addresses) => {
    try{
        await connectToDB();
    
        const user = await User.findOneAndUpdate({clerkId: id}, {
            $set: {
                clerkId: id,
                firstName: first_name,
                lastName: last_name,
                profilePhoto: profile_image_url,
                email: email_addresses[0].email_address,
            }
        }, 
        {upsert: true, new: true})

        await user.save();
        return user;
    } catch(error) {
        console.log(error);
    }
}