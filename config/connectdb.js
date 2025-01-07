import mongoose from "mongoose";
const password = "EauqyTOvrTNJFvh8";
const username = "adilibadov654";
const cluster = "PetPalCluster";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.9xcq1.mongodb.net/?retryWrites=true&w=majority&appName=PetPalCluster`)
        console.log(`MongoDB Connected Successfully`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
export default connectDB;