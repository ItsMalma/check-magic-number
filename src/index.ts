const magicNumbers: { [numbers: string]: string[] | string } = {
  "89504e470d0a1a0a": "png",
  ffd8ffe0: "jpg",
  "47494638": "gif",
};

export function fromBuffer(buffer: Buffer): string | string[] | undefined {
  return magicNumbers[
    Object.keys(magicNumbers).find((magicNumber) => {
      return buffer.toString("hex").startsWith(magicNumber);
    })
  ];
}
