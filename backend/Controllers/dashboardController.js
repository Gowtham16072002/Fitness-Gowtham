const userModel = require("../models/userModel");
const TrainerContent = require("../models/trainerContentModel");
const TestimonialContent = require("../models/testimonialContentModel");

const getDashboardOverview = async (req, res) => {
    try {
        const totalMembers = await userModel.countDocuments({ role: "user" });
        const trainerContent = await TrainerContent.findOne();
        const testimonialContent = await TestimonialContent.findOne();
        const totalTrainers = trainerContent?.trainers?.length || 0;
        const totalTestimonials = testimonialContent?.testimonials?.length || 0;

        // Program model not created yet, so keep 0 for now
        const totalPrograms = 0;

        return res.status(200).json({
            success: true,
            data: {
                totalMembers,
                totalTrainers,
                totalPrograms,
                totalTestimonials,
            },
        });
    } catch (error) {
        console.error("Dashboard Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch dashboard data",
        });
    }
};

module.exports = { getDashboardOverview };