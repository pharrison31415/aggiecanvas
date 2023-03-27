import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
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
