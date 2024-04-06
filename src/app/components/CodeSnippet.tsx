import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeSnippetProps {
    language: string;
    code: string;
    fontSize?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ language, code, fontSize = '14px' }) => {
    const codeStyle = {
        fontSize: fontSize,
    };

    return (
        <div className='w-auto h-auto overflow-x-auto'>
            <SyntaxHighlighter language={language} style={vscDarkPlus} codeTagProps={{ style: codeStyle }}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeSnippet
