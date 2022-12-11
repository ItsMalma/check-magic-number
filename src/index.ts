const magicNumbers: { [numbers: string]: string[] | string } = {
  "89504e470d0a1a0a": "png",
  ffd8ffe0: "jpg",
  "47494638": "gif",
};

/**
 * Determines the extension of the given buffer of data.
 * @param {Buffer} buffer - The buffer of data to examine.
 * @returns {string | string[] | undefined} - The extension of the buffer if it can be determined, or undefined if it cannot.
 */
export function fromBuffer(buffer: Buffer): string | string[] | undefined {
  return magicNumbers[
    Object.keys(magicNumbers).find((magicNumber) => {
      return buffer.toString("hex").startsWith(magicNumber);
    })
  ];
}
