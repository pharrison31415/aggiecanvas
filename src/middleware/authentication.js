import { prisma } from "../../../utils/db-client";

export const authenticationMiddleware = async (req, res, next) => {

  const sessionToken = req.cookies["session-token"];
  if (sessionToken) {
    const session = await prisma.session.findFirst({
      where: {
        token: sessionToken
      },
      include: {
        user: true
      }
    });
    if (session) {
      req.session = session;
      req.user = session.user;
    }
  }
  next();
}