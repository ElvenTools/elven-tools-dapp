import {
  Address,
  UserPublicKey,
  UserVerifier,
  SignableMessage,
} from '@elrondnetwork/erdjs';
import { Signature } from '@elrondnetwork/erdjs/out/signature';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiOutput } from '../../../hooks/interaction/useApiQuery';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface LoginRequest {
  address: string;
  loginToken: string;
  signature: string;
  data: Record<string, unknown>;
}

export type LoginResponse = {
  accessToken: string;
  expiresAt: number;
} | null;

function verifySignedMessage(
  message: string,
  sig: string,
  wallet: string
): boolean {
  try {
    const address = new Address(wallet);
    const pubKey = new UserPublicKey(address.pubkey());
    const verifier = new UserVerifier(pubKey);
    const signature = new Signature(Buffer.from(sig, 'hex'));

    const signMessage = new SignableMessage({
      address: address,
      message: Buffer.from(message),
      signature: signature,
    });
    return verifier.verify(signMessage);
  } catch {
    return false;
  }
}

function isRequestAuthorized({
  address,
  loginToken,
  signature,
  data,
}: LoginRequest): boolean {
  const message = address + loginToken + JSON.stringify(data);

  return verifySignedMessage(message, signature, address);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiOutput<LoginResponse>>
) {
  const data = req.body;

  if (!isRequestAuthorized(data)) {
    console.log(
      `Unauthorized login request due to invalid signature for address: ${data.address}.`
    );
    return res.status(401).json({
      data: null,
      error: 'Unauthorized to make this request. Signature invalid.',
    });
  }

  const payload = {
    address: data.address,
    sub: 'Auth for Dapp',
  };

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_SECRET ?? 'jsonwebtokensecret',
    { expiresIn: '24h' }
  );

  // bit of a hack to get the expiresAt timestamp
  const moreInfo = jwt.decode(accessToken);

  res.status(200).json({
    data: {
      accessToken,
      expiresAt: ((moreInfo as JwtPayload)?.exp ?? 0) * 1000,
    },
  });
}
