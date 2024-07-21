import axios from "axios";

export const getMeme = async (data) => {
    try {
        const response = await axios.get(
            "https://lucasaur.com/api/meme",
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        const image_url = response.data[1][1][0][2][1];
        console.log("Meme fetched:", image_url);
        return image_url;

    } catch (error) {
        console.error("Error fetching meme:", error);
        throw error;
    }
}
