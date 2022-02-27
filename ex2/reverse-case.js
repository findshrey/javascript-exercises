function reverseCase(str) {
   let reversedStr = ""

   for (let i = 0; i < str.length; i++) {
      let letter = str[i]

      if (letter === letter.toUpperCase()) {
         reversedStr += letter.toLowerCase()
      } else {
         reversedStr += letter.toUpperCase()
      }
   }

   return reversedStr
}
