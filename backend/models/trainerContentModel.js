const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        certificate: {
            type: String,
            required: true,
            trim: true,
        },
        experience: {
            type: String,
            required: true,
            trim: true,
        },
        specialty: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: true }
);

const trainerContentSchema = new mongoose.Schema(
    {
        hero: {
            title: {
                type: String,
                default: "Our Expert Trainers",
                trim: true,
            },
            subtitle: {
                type: String,
                default:
                    "Meet our certified fitness professionals who guide, motivate, and support every member on their journey.",
                trim: true,
            },
        },

        displayLimit: {
            type: Number,
            default: 3,
        },


        trainers: {
            type: [trainerSchema],
            default: [
                {
                    name: "Emilia Clarke",
                    role: "Strength & Conditioning Specialist",
                    certificate: "NASM Certified",
                    experience: "8+ Years Experience",
                    specialty: "Muscle Gain & Strength",
                    image:
                        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
                },
                {
                    name: "Michael Lee",
                    role: "Yoga Trainer",
                    certificate: "NASM Certified",
                    experience: "8+ Years Experience",
                    specialty: "Flexibility & Balance",
                    image:
                        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500",
                },
                {
                    name: "Jennifer",
                    role: "Zumba Trainer",
                    certificate: "NASM Certified",
                    experience: "8+ Years Experience",
                    specialty: "Dance Fitness & Weight Loss",
                    image:
                        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500",
                },
            ],
        },
    },
    { timestamps: true }
);

const TrainerContent = mongoose.model("TrainerContent", trainerContentSchema);

module.exports = TrainerContent;