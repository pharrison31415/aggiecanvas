import { prisma } from "../../../utils/db-client";
import { v4 as uuidv4 } from 'uuid';

export const createUser = () =>
  async (req, res) => {
    const {email, password} = req.body
    const passwordHash = await bcrypt.hash(password, 10);

    const userCount = await prisma.user.count();
    if (userCount > 1) {
      // check if an email is already in use
      const existingEmail = await prisma.user.findFirst({
        where: {
          email,
        }
      });
      if (existingEmail) {
        return res.status(400).json({message: "this email is already in use"});
      }
    }

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        sessions: {
          create: [{
            token: uuidv4()
          }]
        }
      },
      include: { 
        sessions: true
       }
    });
    
    res.cookie("session-token", user.sessions[0].token, {
      httpOnly: true,
      maxAge: 60000 * 10
    });
    res.json({ user });
  }