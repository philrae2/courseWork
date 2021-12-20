//Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

/*function extractLanguage (IsoCode) {
  let language = IsoCode.slice(0,2);
  console.log(language);
}*/

//solution 2

function extractLanguage(isoCode) {
  console.log(isoCode.split("_")[0]);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

