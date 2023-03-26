import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const oldSnapshot = await prisma.gridSnapshot.findFirst({
    orderBy: { lastUpdate: "desc" },
  });

  const updates = await prisma.update.findMany({
    where: { timeStamp: { gt: new Date() } },
  });

  for (let u of updates) {
    oldSnapshot.grid[u.row][u.column] = u.color;
  }

  await prisma.gridSnapshot.create({
    data: { grid: oldSnapshot.grid },
  });

  await prisma.gridSnapshot.deleteMany({});

  res.status(200).json({});
};
