import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { ApiOutput } from '../../../hooks/interaction/useApiQuery';

const charCount = 16;

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<ApiOutput>
) {
  res.status(200).json({
    data: {
      token: crypto.randomBytes(Math.ceil(charCount / 2)).toString('hex'),
    },
  });
}
