import SoundButton from "@/components/ui/SoundButton.jsx";

const SoundboardPage = () => {
    return (
        <div>
            <h1 className="flex h-full text-6xl underline justify-center">
                Soundboard
            </h1>

            {/*<div className="flex justify-center items-center min-h-screen">*/}
            {/*    <div className="text-center">*/}
            {/*        <h1 className="text-4xl font-bold mb-8">Soundboard</h1>*/}
            {/*        <div className="grid grid-cols-3 gap-4">*/}
            {/*            <div>*/}
            {/*                <SoundButton label="hmm" onClick={() => playSound('hmm')}/>*/}
            {/*                <SoundButton label="point" onClick={() => playSound('point')}/>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <SoundButton label="eating" onClick={() => playSound('eating')}/>*/}
            {/*                <SoundButton label="hit" onClick={() => playSound('hit')}/>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <SoundButton label="hurt" onClick={() => playSound('hurt')}/>*/}
            {/*                <SoundButton label="level_up" onClick={() => playSound('level_up')}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 my-6 ">
                <SoundButton name={"hmm"}/>
                <SoundButton name={"eating"}/>
                <SoundButton name={"hurt"}/>
                <SoundButton name={"point"}/>
                <SoundButton name={"hit"}/>
                <SoundButton name={"level_up"}/>
            </div>
        </div>
    )
}

export default SoundboardPage;
