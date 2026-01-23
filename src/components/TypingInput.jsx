import settings from "../settings.js";
import { useState } from "react";

const TYPED_STYLE = "text-fem-green-500";
const CURRENT_STYLE = "bg-fem-neutral-800";
const TYPO_STYLE = "text-fem-red-500 underline";

const GAME_STATES= settings.GAME_STATES;

export default function TypingInput({ gameState, difficulty, difficultyChangeHandler, text }) {
    const [currentCharIndex, setCurrentCharIndex] = useState(25);
    const [typoIndices, setTypoIndices] = useState([3, 7, 8, 15]); // Example typo indices
    const typedText = text.slice(0, currentCharIndex);
    const currentChar = text[currentCharIndex];
    const remainingText = text.slice(currentCharIndex + 1);

    return (
        <div className="absolute">
            {/************** Main Input Area **************/}
            <div className={`text-xl ${gameState === GAME_STATES.NOT_STARTED ? "blur-sm" : ""}`}>
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

            {/* ************* Overlay ************* */}
            <div id="buttonOverlay" className="absolute top-0 left-0 w-full h-full flex flex-col gap-4 justify-center items-center">
                <button id="startBtn" className="py-2 px-5 bg-fem-blue-600 rounded-lg text-fem-neutral-0">
                    <span>Start Typing Test</span>
                </button>
                <p className="font-bold text-lg">Or click the text and start typing</p>
            </div>
        </div>
    );
}


function TypingChar({ children, className = "" }) {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

