import { useState } from "react";

const TYPED_STYLE = "text-fem-green-500";
const CURRENT_STYLE = "bg-fem-neutral-800";
const TYPO_STYLE = "text-fem-red-500 underline";

export default function TypingInput({ text }) {
    const [currentCharIndex, setCurrentCharIndex] = useState(25);
    const [typoIndices, setTypoIndices] = useState([3, 7, 8, 15]); // Example typo indices
    const typedText = text.slice(0, currentCharIndex);
    const currentChar = text[currentCharIndex];
    const remainingText = text.slice(currentCharIndex + 1);

    return (
        <div>
            {typedText.split('').map((char, index) => (
                <TypingChar key={index} className={typoIndices.includes(index) ? TYPO_STYLE : TYPED_STYLE}>
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

