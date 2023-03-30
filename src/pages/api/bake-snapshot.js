import { prisma } from "../../../utils/db-client";

const ALLOWED_IPS = new Set(["129.123.254.123", "127.0.0.1"]);

export default async (req, res) => {
  if (!ALLOWED_IPS.has(req.connection.remoteAddress)) {
    res.status(401).json({ message: "You are not authorized to do that" });
    return;
  }

  const oldGrid = (
    await prisma.gridSnapshot.findFirst({
      orderBy: { lastUpdate: "desc" },
    })
  ).grid;

  const updates = await prisma.update.findMany({
    where: { timeStamp: { lt: new Date() } },
  });

  for (let u of updates) {
    oldGrid[u.row][u.column] = u.color;
  }

  await prisma.gridSnapshot.create({
    data: { grid: oldGrid },
  });

  await prisma.update.deleteMany({});

  res.status(200).json({});
};
