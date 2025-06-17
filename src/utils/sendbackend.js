export const getAltText = async (base64Image) => {
  const response = await fetch("http://127.0.0.1:5000/generate-alt", {  // FIXED URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: base64Image }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to get alt text");
  }

  return data.alt_text;
};
