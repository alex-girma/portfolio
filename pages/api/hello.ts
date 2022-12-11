// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' });
// }
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat={50}&lon={8}&appid=${process.env.SECRET_KEY}`
  );
  const json = await data.json();
  console.log(json);
  res.status(200).json({ name: 'John Doe' });
}
