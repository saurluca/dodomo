import {Button} from "@/components/ui/button.jsx";
import {useRef} from "react";

function SoundButton({name}) {
    const audioRef = useRef();

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div>
            <Button onClick={playSound} className={"shadow-2xl w-32 h-12 text-2xl"}>
                {name}
            </Button>
            <audio ref={audioRef} src={`/sounds/${name}.mp3`}/>
        </div>
    );
}

export default SoundButton;
