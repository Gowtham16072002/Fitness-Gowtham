const ProgramContent = require("../models/programContentModel");
const getPrograms = async (req, res) => {
  try {
    let data = await ProgramContent.findOne();

    if (!data || data.programs.length === 0) {
      data = await ProgramContent.findOneAndUpdate(
        {},
        {
          programs: [
            {
              title: "Beginner Fitness Program",
              image: "",
              features: [
                "Improves muscle strength and stamina",
                "Supports weight management and fat loss",
                "Boosts energy and well-being",
              ],
              route: "BEGINNER_GYM",
            },
            {
              title: "Yoga Fitness Program",
              image: "",
              features: [
                "Increases flexibility and balance",
                "Reduces stress and improves focus",
                "Enhances overall strength",
              ],
              route: "BEGINNER_YOGA",
            },
            {
              title: "Zumba Fitness Program",
              image: "",
              features: [
                "Burns calories and supports weight loss",
                "Improves coordination",
                "Fun workouts",
              ],
              route: "ZUMBA_FITNESS",
            },
            {
              title: "General Sports Program",
              image: "",
              features: [
                "Boosts strength and power",
                "Improves agility",
                "Enhances performance",
              ],
              route: "GENERAL_SPORTS",
            },
          ],
        },
        { new: true, upsert: true }
      );
    }

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch programs" });
  }
};
const savePrograms = async (req, res) => {
  try {
    const { programs } = req.body;

    let data = await ProgramContent.findOne();

    if (!data) {
      data = new ProgramContent();
    }

    data.programs = programs;

    await data.save();

    res.json({
      success: true,
      message: "Programs saved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to save programs" });
  }
};


module.exports = { getPrograms, savePrograms };