export function createIdUnique(): number {
  let idString, hash;
  do {
    const prefix = 'id_';
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substr(2, 9);
    idString = `${prefix}${timestamp}_${randomSuffix}`;
    hash = 0;
    for (let i = 0; i < idString.length; i++) {
      hash = ((hash << 5) - hash) + idString.charCodeAt(i);
      hash |= 0;
    }
    hash = Math.abs(hash);
  } while (idString.startsWith('-'));
  return hash;
}
