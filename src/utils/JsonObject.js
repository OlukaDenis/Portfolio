const JsonObject = json => {
  const { name } = json.name;
  const { image } = json.image;
  const { liveLink } = json.liveLink;

  return {
    name,
    image,
    liveLink,
  };
};

export default JsonObject;
