import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiOutput } from '../../../hooks/interaction/useApiQuery';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiOutput>
) {
  const { address } = req.cookies;

  if (address) {
    // do something with the address
    // at this point you can be certain that this address comes from the wallet owner and noone else
    res.status(200).json({
      data: {
        hint: 'This call comes from the owner of the wallet ' + address,
      },
    });
  }
  res.status(500).json({
    data: {},
    error: 'Something went wrong with the address!',
  });
}
