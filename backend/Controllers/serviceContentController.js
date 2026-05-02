const ServiceContent = require("../models/serviceContentModel");

const getServiceContent = async (req, res) => {
    try {
        let serviceContent = await ServiceContent.findOne();

        if (!serviceContent) {
            serviceContent = await ServiceContent.create({});
        }

        res.status(200).json({
            success: true,
            data: serviceContent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch service content",
            error: error.message,
        });
    }
};

const updateServiceContent = async (req, res) => {
    try {
        const serviceContent = await ServiceContent.findOneAndUpdate(
            {},
            {
                $set: {
                    hero: req.body.hero,
                    serviceCards: req.body.serviceCards,
                    faqs: req.body.faqs,
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
            message: "Service content updated successfully",
            data: serviceContent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update service content",
            error: error.message,
        });
    }
};

module.exports = {
    getServiceContent,
    updateServiceContent,
};