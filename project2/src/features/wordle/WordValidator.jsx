import React from "react";
import { useSelector } from "react-redux";
import { selectAnswer } from "../slices/wordSlice";
import { selectGuess } from "../slices/guessSlice";

export default function WordValidator(props) {
    const guess = useSelector(selectGuess);
    const answer = useSelector(selectAnswer);
    if (guess !== undefined && guess.length !== answer.length) {
        return (
            <div> The length of the word should be {answer.length}</div>
        )
    } else if (guess === answer) {
        props.callback(true);
        return (
            <div>Congratulations! Would you like to try again?</div>
        )
    } else {
        return (
            <div></div>
        )
    }
}