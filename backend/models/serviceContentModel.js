const mongoose = require("mongoose");

const serviceContentSchema = new mongoose.Schema(
    {
        hero: {
            title: {
                type: String,
                default: "Our Services",
            },
            description: {
                type: String,
                default:
                    "Comprehensive fitness and wellness services designed to support you at every stage of your journey.",
            },
            leftTexts: {
                type: [
                    {
                        text: String,
                    },
                ],
                default: [{ text: "Elevate" }, { text: "Unstoppable" }],
            },
            rightTexts: {
                type: [
                    {
                        text: String,
                    },
                ],
                default: [{ text: "Energize" }, { text: "Stronger" }],
            },
            buttonText: {
                type: String,
                default: "Get Started",
            },
        },

        serviceCards: {
            type: [
                {
                    icon: {
                        type: String,
                        default: "fa-regular fa-user",
                    },
                    title: String,
                    description: String,
                    includes: {
                        type: [
                            {
                                text: String,
                            },
                        ],
                        default: [],
                    },
                    layout: {
                        type: String,
                        enum: ["large", "small"],
                        default: "small",
                    },
                },
            ],
            default: [
                {
                    icon: "fa-regular fa-user",
                    title: "Personal Training & Beginner Programs",
                    description:
                        "Experience personalized one-on-one training designed around your unique goals, fitness level, and lifestyle. Whether you're just starting your fitness journey or looking to improve strength and technique, these programs provide safe, structured, and effective workouts that build confidence and deliver real results.",
                    includes: [
                        { text: "Fully customized workout plans tailored to your goals" },
                        { text: "One-on-one coaching with real-time feedback" },
                        { text: "Proper form, posture and technique correction" },
                        { text: "Beginner-friendly routines with gradual progression" },
                        { text: "Strength, mobility, and flexibility training" },
                        { text: "Confidence-building workouts for long-term consistency" },
                    ],
                    layout: "large",
                },
                {
                    icon: "fa-solid fa-heart-pulse",
                    title: "Wellness Coaching",
                    description:
                        "Holistic guidance focused on daily habits, recovery, and mental well-being to support long-term health and balance.",
                    includes: [
                        { text: "Habit & lifestyle coaching" },
                        { text: "Recovery & stress management" },
                        { text: "Nutrition basics" },
                        { text: "Mindset support" },
                    ],
                    layout: "small",
                },
                {
                    icon: "fa-solid fa-video",
                    title: "Online Coaching",
                    description:
                        "Personalized virtual training with flexible schedules, progress tracking, and ongoing support — train anytime, anywhere.",
                    includes: [
                        { text: "Personalized workout plans" },
                        { text: "Progress tracking" },
                        { text: "Virtual check-ins" },
                        { text: "Ongoing support" },
                    ],
                    layout: "small",
                },
            ],
        },

        faqs: {
            type: [
                {
                    question: String,
                    answer: String,
                },
            ],
            default: [
                {
                    question: "How long does it take to see results?",
                    answer:
                        "Most people begin noticing improvements in strength, energy, and endurance within 4–6 weeks when following the program consistently.",
                },
                {
                    question: "Do you provide a diet plan?",
                    answer:
                        "Yes. Our Pro and Elite plans include customized diet guidance tailored to your fitness goals and lifestyle.",
                },
                {
                    question: "Is online coaching available?",
                    answer:
                        "Yes! We offer online coaching programs that allow you to train from anywhere with workout plans, virtual check-ins, and progress tracking.",
                },
            ],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ServiceContent", serviceContentSchema);