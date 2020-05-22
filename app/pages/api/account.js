import jwt from 'jsonwebtoken';
import User from '../../models/User';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {
  if (!('authorization' in req.headers)) {
    return res.status(401).send('No authorization token');
  }

  try {
    const { userId } = await jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );

    const user = await User.findOne({ _id: userId });

    if (user) {
      console.log('HI4');
      return res.status(200).json(user);
    } else {
      return res.status(404).send('User not found');
    }
  } catch (error) {
    return res.status(403).send('Invalid token');
  }
};
