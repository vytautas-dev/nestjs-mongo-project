import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hash(rawPassword, salt);
}

export async function comparePassword(rawPassword: string, hash: string) {
  return await bcrypt.compare(rawPassword, hash);
}
