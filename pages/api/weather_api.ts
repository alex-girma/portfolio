// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&lang=${query.lang}&units=metric&appid=${process.env.SECRET_KEY}`
  );
  const json = await data.json();
  res.status(200).json(json);
}
