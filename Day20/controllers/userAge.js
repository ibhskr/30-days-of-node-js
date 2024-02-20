import User from "../models/userModel.js";

export async function averageAgeOfUsers(req, res) {
  try {
    const averageAge = await User.aggregate([
      { $group: { _id: null, averageAge: { $avg: '$age' } } }
    ]);
    res.json({ averageAge: averageAge[0].averageAge });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
