// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { test } = req.body;
  res.status(200).json({
    lol: "FUCK",
    data: test,
  });
}
