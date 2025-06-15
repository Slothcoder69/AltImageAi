const handleImageUpload = async (base64Image) => {
  setIsLoading(true);
  try {
    const altText = await getAltText(base64Image);
    setGeneratedAltText(altText);
  } catch (err) {
    console.error("Error generating alt text:", err);
  } finally {
    setIsLoading(false);
  }
};
