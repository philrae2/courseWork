function extractRegion (isoCode) {
  console.log(isoCode.split(".")[0].split("_")[1]);
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'