import { prisma } from "../../../utils/db-client";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";

export const createUser = () =>
  async (req, res) => {
    const {email, password} = req.body
    const passwordHash = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        sessions: {
          create: [{
            token: uuidv4()
          }]
        }
      }
    });
    
    res.cookie("session-token", user.sessions[0].token, {
      httpOnly: true,
      maxAge: 60000 * 10
    });
    
    res.status(200).json({ user });
  }