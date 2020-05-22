import connectDb from '../../utils/connectDb';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

connectDb();

export default async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(422).send(`User already exists with email ${email}`);
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hash,
    }).save();

    console.log({ newUser });

    const token = await jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    return res.status(201).json(token);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error signup user. Please try again later');
  }
};
