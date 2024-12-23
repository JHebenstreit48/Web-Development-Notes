import CodePageSetup from "../Components/CodePageSetup.tsx";
import Header from "../Components/Header.tsx";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonCode.md";

    return (

        <>
        
            <Header text="Python Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );
};

export default PythonCode;
