import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import axios from "axios";
import LoadingSpinner from "@/components/ui/loadingSpinner.jsx";

const MemePage = () => {
    // State for storing the image source URL
    const [imageSrc, setImageSrc] = useState("/lol.png")
    // State to track loading status
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        // Set loading to true at the start of the API call
        setLoading(true)
        console.log("loading Meme")
        // Perform the API call to fetch a meme
        const response = await axios.get("https://lucasaur.com/api/meme")
        // Update the image source state with the fetched URL
        setImageSrc(response.data[1][1][0][2][1])
        // Set loading to false after the API call is complete
        setLoading(false)
    }

    // Render the MemePage component
    return (
        <div className="w-full h-full">
            <div className="flex justify-center">
                {/* Button to trigger meme loading */}
                <Button className="text-6xl  hover:bg-green-700 w-100 h-20" onClick={handleClick}>SHOW MEME</Button>
            </div>
            <div className="flex justify-content">
                {/* Conditional rendering: show loading spinner or image based on loading state */}
                {loading ? <LoadingSpinner/> : <img id="image" src={imageSrc} alt="Meme" width="800" height="800"/>}
            </div>
        </div>
    )
}

export default MemePage;
