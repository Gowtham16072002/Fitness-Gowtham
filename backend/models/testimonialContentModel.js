const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
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
        review: {
            type: String,
            required: true,
            trim: true,
        },
        rating: {
            type: Number,
            default: 5,
            min: 1,
            max: 5,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: true }
);

const testimonialContentSchema = new mongoose.Schema(
    {
        hero: {
            title: {
                type: String,
                default: "What Our Clients Say",
                trim: true,
            },
            subtitle: {
                type: String,
                default:
                    "Real stories from our members who transformed their fitness journey with Victory Fit.",
                trim: true,
            },
        },

        displayLimit: {
            type: Number,
            default: 4,
        },

        testimonials: {
            type: [testimonialSchema],
            default: [
                {
                    name: "Rahul Sharma",
                    role: "Fitness Member",
                    review: "Lost 10kg in 3 months! Amazing trainers.",
                    rating: 5,
                    image:
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
                },
                {
                    name: "Priya Patel",
                    role: "Yoga Member",
                    review: "Best fitness program I ever joined.",
                    rating: 5,
                    image:
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
                },
                {
                    name: "Arjun Mehta",
                    role: "Zumba Member",
                    review: "Great transformation results!",
                    rating: 5,
                    image:
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
                },
                {
                    name: "Sneha Kapoor",
                    role: "Fitness Member",
                    review: "Professional coaching and diet plan.",
                    rating: 5,
                    image:
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
                },
            ],
        },
    },
    { timestamps: true }
);

const TestimonialContent = mongoose.model(
    "TestimonialContent",
    testimonialContentSchema
);

module.exports = TestimonialContent;