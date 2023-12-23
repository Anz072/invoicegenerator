const generateUID = () => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substr(2, 5);
  const uid = timestamp + randomPart;
  return uid;
};

export default generateUID;
