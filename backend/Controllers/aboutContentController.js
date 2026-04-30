const AboutContent = require("../models/aboutContentModel");

const getAboutContent = async (req, res) => {
    try {
        let aboutContent = await AboutContent.findOne();

        if (!aboutContent) {
            aboutContent = await AboutContent.create({});
        }

        res.status(200).json({
            success: true,
            data: aboutContent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch about content",
            error: error.message,
        });
    }
};

const updateAboutContent = async (req, res) => {
    try {
        const aboutContent = await AboutContent.findOneAndUpdate(
            {},
            {
                $set: {
                    aboutTop: req.body.aboutTop,
                    banner: req.body.banner,
                    missionVision: req.body.missionVision,
                    transformation: req.body.transformation,
                    community: req.body.community,
                },
            },
            {
                new: true,
                upsert: true,
                runValidators: true,
            }
        );

        res.status(200).json({
            success: true,
            message: "About content updated successfully",
            data: aboutContent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update about content",
            error: error.message,
        });
    }
};

module.exports = {
    getAboutContent,
    updateAboutContent,
};