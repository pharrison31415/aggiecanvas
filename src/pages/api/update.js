import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const { row, column, color } = req.body;

  await prisma.update.create({
    data: {
      row,
      column,
      color,
      userId: -1,
    },
  });

  res.status(200).json({});
};
