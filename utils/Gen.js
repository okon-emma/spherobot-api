const GenUserName = (name) => {
  const nameSlice = name.slice(0, 5);
  const nameSliceLower = nameSlice.toLowerCase().replace(/\s/g, "");
  const randomDigits = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  return nameSliceLower + randomDigits;
};

const GenPassword = () => {
  var length = 8,
    charset = "123456789ABCDEFGHJKMNPQRSTUVWXYZ123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};

const GenOTP = (length) => {
  let result = "";
  let characters = "1234567890";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = {
  GenUserName,
  GenPassword,
  GenOTP,
};
