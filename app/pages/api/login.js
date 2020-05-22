import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).send('No user exists with that email');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = await jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      );

      return res.status(200).json(token);
    } else {
      return res.status(401).send('Password do not match');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error loggin in user');
  }
};
