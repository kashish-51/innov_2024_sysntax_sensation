
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AiImageGenerator({ prompt }) {
  const [generatedImage, setGeneratedImage] = useState(null);

  useEffect(() => {
    if (prompt.trim() !== "") {
      generateImage();
    }
  }, [prompt]);

  const generateImage = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/images/generations', {
        model: "dall-e-2",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${"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"}`
        }
      });

      const imageUrl = response.data.data[0].url;
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {generatedImage && <img src={generatedImage} alt="AI generated image" />}
    </div>
  );
}

export default AiImageGenerator;






