const mongoose = require("mongoose");

const aboutContentSchema = new mongoose.Schema(
    {
        aboutTop: {
            title: {
                type: String,
                default: "About us",
            },
            description: {
                type: String,
                default:
                    "Helping people achieve strength, flexibility, and confidence through gym training, yoga, Zumba dance programs.",
            },
            gallery: {
                type: [
                    {
                        title: String,
                        image: String,
                    },
                ],
                default: [
                    { title: "Cardio Zone", image: "" },
                    { title: "Yoga Section", image: "" },
                    { title: "Zumba Section", image: "" },
                    { title: "Modern Gym Equipment", image: "" },
                ],
            },
            buttons: {
                type: [
                    {
                        text: String,
                    },
                ],
                default: [
                    { text: "Explore Programs" },
                    { text: "Get Started" },
                    { text: "Join Now" },
                ],
            },
        },

        banner: {
            description: {
                type: String,
                default:
                    "Train stronger, move better, and live healthier with our gym, yoga, Zumba, and athletic programs designed to build strength, flexibility, endurance, and confidence.",
            },
        },

        missionVision: {
            missionTitle: String,
            missionDescription: String,
            missionIcon: {
                type: String,
                default: "fa-solid fa-bullseye",
            },

            visionTitle: String,
            visionDescription: String,
            visionIcon: {
                type: String,
                default: "fa-solid fa-eye",
            },
        },

        transformation: {
            title: {
                type: String,
                default: "Real Transformations From Our Members",
            },
            description: {
                type: String,
                default:
                    "See how our gym, yoga, zumba, and dance programs help members achieve their fitness goals and transform their lifestyle.",
            },
            cards: {
                type: [
                    {
                        beforeImage: String,
                        afterImage: String,
                        category: String,
                        description: String,
                    },
                ],
                default: [
                    {
                        beforeImage: "",
                        afterImage: "",
                        category: "Weight Loss",
                        description: "Strength & Weight Loss Transformation",
                    },
                    {
                        beforeImage: "",
                        afterImage: "",
                        category: "Yoga",
                        description: "Yoga Flexibility & Wellness Transformation",
                    },
                    {
                        beforeImage: "",
                        afterImage: "",
                        category: "Zumba",
                        description: "Zumba Fitness Transformation",
                    },
                ],
            },
        },

        community: {
            title: String,
            description: String,
            buttons: {
                type: [
                    {
                        text: String,
                    },
                ],
                default: [
                    { text: "View Programs" },
                    { text: "Get Started today" },
                    { text: "Join Now" },
                ],
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("AboutContent", aboutContentSchema);