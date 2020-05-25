import jwt from 'jsonwebtoken';
import User from '../../models/User';

export default async (req, res) => {
  try {
    const { userId } = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    const users = await User.find({ _id: { $ne: userId } });
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(403).send('Please login again');
  }
};
