import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const { r1, c1, r2, c2 } = req.body;

  for (let row = r1; row <= r2; row++) {
    for (let column = c1; column <= c2; column++) {
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
