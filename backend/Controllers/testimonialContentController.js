const TestimonialContent = require("../models/testimonialContentModel");

const getTestimonialContent = async (req, res) => {
    try {
        let content = await TestimonialContent.findOne();

        if (!content) {
            content = await TestimonialContent.create({});
        }

        return res.status(200).json({
            success: true,
            message: "Testimonial content fetched successfully",
            data: content,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching testimonial content",
        });
    }
};

const updateTestimonialContent = async (req, res) => {
    try {
        const { hero, displayLimit, testimonials } = req.body;

        let content = await TestimonialContent.findOne();

        if (!content) {
            content = await TestimonialContent.create({
                hero,
                displayLimit,
                testimonials,
            });
        } else {
            content.hero = hero || content.hero;
            content.displayLimit = displayLimit || content.displayLimit;
            content.testimonials = testimonials || content.testimonials;

            await content.save();
        }

        return res.status(200).json({
            success: true,
            message: "Testimonial content updated successfully",
            data: content,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating testimonial content",
        });
    }
};

module.exports = {
    getTestimonialContent,
    updateTestimonialContent,
};