import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import LoadingSpinner from "@/components/ui/loadingSpinner.jsx";
import {Input} from "@/components/ui/input.jsx";
import {fetchImage} from "@/services/fetchImage.jsx";

const MemePage = () => {
    const [imageSrc, setImageSrc] = useState("/lol.png")
    const [loading, setLoading] = useState(false)
    const [prompt, setPrompt] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("loading Image...")
        console.log("Prompt:", prompt)

        try {
            const imageUrl = fetchImage(prompt);
            setImageSrc(await imageUrl)
            console.log("Image URL:", imageUrl)
        } catch (error) {
            console.error("Error fetching meme:", error);
        }
        setLoading(false);
    }

    return (
        <div className>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Button className="text-4xl hover:bg-green-700 w-80 h-16" type="submit">PAINT THIS</Button>
                <Input
                    type="text"
                    placeholder="New Task"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-white shadow text-2xl h-16 p-4 rounded-md"
                    required
                />
            </form>
            <br/>
            <div className="flex justify-content">
                {/* Conditional rendering: show loading spinner or image based on loading state */}
                {loading ? <LoadingSpinner/> : <img id="image" src={imageSrc} alt="Image" width="800" height="800"/>}
            </div>
        </div>
    )
}

export default MemePage;
