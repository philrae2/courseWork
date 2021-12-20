/*Write code that checks whether the string byteSequence contains the character x.*/

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(/x/.test(byteSequence));
console.log(byteSequence.includes("x"));

