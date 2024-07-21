import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import axios from "axios";
import LoadingSpinner from "@/components/ui/loadingSpinner.jsx";
import {Input} from "@/components/ui/input.jsx";
import {getMeme} from "@/services/memeApi.jsx";

const MemePage = () => {
    // State for storing the image source URL
    const [imageSrc, setImageSrc] = useState("/lol.png")
    // State to track loading status
    const [loading, setLoading] = useState(false)
    const [prompt, setPrompt] = useState("")

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("loading Meme...")
        console.log("Prompt:", prompt)
        const response = getMeme(prompt)
        setImageSrc(await response)
        setLoading(false)
    }

    return (
        <div className="w-full h-full">
            <form onSubmit={handleSubmit} className="flex max-w-[420px] w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="New Task"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-white shadow"
                    required
                />
                <Button className="shadow border hover:bg-green-700" type="submit">MEME THIS</Button>
            </form>
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
