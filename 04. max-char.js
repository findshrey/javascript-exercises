// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
   const charMap = {}
   let max = 0
   let maxChar = ''

   for (let char of str) {
      charMap[char] ? charMap[char]++ : (charMap[char] = 1)
      // charMap[char] = charMap[char] + 1 || 1

      if (charMap[char] > max) {
         max = charMap[char]
         maxChar = char
      }
   }

   return maxChar
}

module.exports = maxChar

// function maxChar(str) {
//    const charMap = {}
//    let max = 0
//    let maxChar = ''

//    for (let char of str) {
//       charMap[char] = charMap[char] + 1 || 1
//    }

//    for (let key in charMap) {
//       if (charMap[key] > max) {
//          max = charMap[key]
//          maxChar = key
//       }
//    }

//    return maxChar
// }