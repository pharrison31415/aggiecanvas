import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const updates = await prisma.update.findMany({
    where: { timeStamp: { gt: new Date(req.query["last-update"]) } },
  });

  res.status(200).json({
    updates: updates.map((u) => {
      return {
        row: u.row,
        column: u.column,
        color: u.color,
        timeStamp: u.timeStamp,
      };
      // return ({ row, column, color, timeStamp } = u);
    }),
    lastUpdate: new Date().toISOString(),
  });
};
