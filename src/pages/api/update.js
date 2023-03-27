import { prisma } from "../../../utils/db-client";

export default async (req, res) => {
  // console.log(req.connection.remoteAddress);

  const { row, column, color } = req.body;

  const wait = await prisma.waiting.findFirst({
    where: { clientIp: req.connection.remoteAddress },
  });

  if (wait && new Date() - wait.created < 2000) {
    res
      .status(400)
      .json({ message: "You need to wait some time before posting again." });
    return;
  }

  await prisma.waiting.upsert({
    where: { clientIp: req.connection.remoteAddress },
    create: { clientIp: req.connection.remoteAddress },
    update: { created: new Date() },
  });

  await prisma.update.create({
    data: {
      row,
      column,
      color,
      clientIp: req.connection.remoteAddress,
    },
  });

  res.status(200).json({});
};
