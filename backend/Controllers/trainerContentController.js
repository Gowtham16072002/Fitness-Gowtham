const TrainerContent = require("../models/trainerContentModel");

const getTrainerContent = async (req, res) => {
    try {
        let content = await TrainerContent.findOne();

        if (!content) {
            content = await TrainerContent.create({});
        }

        return res.status(200).json({
            success: true,
            message: "Trainer content fetched successfully",
            data: content,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching trainer content",
        });
    }
};

const updateTrainerContent = async (req, res) => {
    try {
        const { hero, trainers, displayLimit } = req.body;

        let content = await TrainerContent.findOne();

        if (!content) {
            content = await TrainerContent.create({
                hero,
                trainers,
            });
        } else {
            content.hero = hero || content.hero;
            content.displayLimit = displayLimit || content.displayLimit;
            content.trainers = trainers || content.trainers;

            await content.save();
        }

        return res.status(200).json({
            success: true,
            message: "Trainer content updated successfully",
            data: content,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating trainer content",
        });
    }
};

module.exports = {
    getTrainerContent,
    updateTrainerContent,
};