const generateImage = async (title) => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          model: "dall-e-2",
          prompt: title, // Use the title as the prompt
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );
  
      const imageUrl = response.data.data[0].url;
      setGeneratedImage(imageUrl);
    } catch (error) {
      setError(error.response ? error.response.data : error.message);
    } finally {
      setIsLoading(false);
    }
  };
  