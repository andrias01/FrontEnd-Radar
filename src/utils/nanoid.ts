export const nanoid = (size = 8): string => {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let id = ''
  const cryptoObj = typeof crypto !== 'undefined' ? crypto : undefined
  for (let i = 0; i < size; i += 1) {
    const randomValue = cryptoObj?.getRandomValues?.(new Uint32Array(1))[0]
    const index = randomValue !== undefined ? randomValue % alphabet.length : Math.floor(Math.random() * alphabet.length)
    id += alphabet[index]
  }
  return id
}
