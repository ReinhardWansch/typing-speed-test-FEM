
export default {
    DATA: await fetch('/public/data.json').then(res => res.json()),

    GAME_STATES: {
        NOT_STARTED: 0,
        STARTED: 1,
        RESULTS: 2
    },

    DIFFICULTY_LEVELS: {
        EASY: { value: 0, label: "Easy", dataAttribute: "easy"},
        MEDIUM: { value: 1, label: "Medium", dataAttribute: "medium" },
        HARD: { value: 2, label: "Hard", dataAttribute: "hard" }
    },

    GAME_MODES: {
        TIMED: { value: 0, label: "Timed (60s)" },
        PASSAGE: { value: 1, label: "Passage" }
    },
    
    SAMPLE_TEXT: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren"
};