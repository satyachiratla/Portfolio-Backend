const Profile = require("../models/profileSchema");

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.find();
    return res.json(profile);
  } catch (err) {
    console.log(err.message);
  }
};

exports.createProfile = async (req, res, next) => {
  const { profileImage, summary } = req.body;

  try {
    const profile = new Profile({
      profileImage,
      summary,
    });

    const result = await profile.save();

    res.status(201).json({
      message: "Profile created successfully!",
      project: result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  const profileId = req.params;
  const { profileImage, summary } = req.body;

  try {
    const profile = await Profile.findById(profileId);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.profileImage = profileImage;
    profile.summary = summary;

    const updatedProfile = await profile.save();

    res.json({
      message: "Profile updated successfully",
      project: updatedProfile,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
