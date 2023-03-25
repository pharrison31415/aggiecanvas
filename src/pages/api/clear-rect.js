import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const { r1, c1, r2, c2 } = req.body;

  for (let row = r1; row <= r2; row++) {
    for (let col = c1; col <= c2; col++) {
      await prisma.update.create({
        data: {
          row,
          column,
          color: "#ffffff",
          userId: -1,
        },
      });
    }
  }

  res.status(200).json({});
};
