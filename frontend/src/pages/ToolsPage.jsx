const ToolsPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Tools</h1>
            <br/>
            <ul className="list-inline text-2xl text-blue-600 underline">
                <li>
                    <a href="https://www.keybr.com/" target="_blank">
                        Typing trainer
                    </a>
                </li>
                <li>
                    <a href="https://learnxinyminutes.com/" target="_blank">
                        Learn x in minutes, quick guide programming concepts and languages
                    </a>
                </li>
                <li>
                    <a href="https://www.diffchecker.com/" target="_blank">
                        Checker for differences in two texts (Code, text, etc.)
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/" target="_blank">
                        Lookup for HTML tags
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ToolsPage;
