import { useState } from "react";

const TYPED_STYLE = "text-fem-green-500";
const CURRENT_STYLE = "bg-fem-neutral-800";

export default function TypingInput({ text }) {
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const typedText = text.slice(0, currentCharIndex);
    const currentChar = text[currentCharIndex];
    const remainingText = text.slice(currentCharIndex + 1);

    return (
        <div>
            {typedText.split('').map((char, index) => (
                <TypingChar key={index} className={TYPED_STYLE}>
                    {char}
                </TypingChar>
            ))}
            <TypingChar className={CURRENT_STYLE}> {currentChar} </TypingChar>
            {remainingText.split('').map((char, index) => (
                <TypingChar key={index}>
                    {char}
                </TypingChar>
            ))}
        </div>
    );
}


function TypingChar({ children, className="" }) {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

