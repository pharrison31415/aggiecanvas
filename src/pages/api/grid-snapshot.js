import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  const snapshot = await prisma.gridSnapshot.findFirst({
    orderBy: { lastUpdate: "desc" },
  });

  res.status(200).json({ snapshot });
};
