import React from "react";
import { useSelector } from "react-redux";
import styles from "./style.module.css"
import { selectAnswer } from "../slices/wordSlice";
import { selectHistoryAttempt } from "../slices/historyAttemptSlice";

function WordChecker() {
    let history = useSelector(selectHistoryAttempt);
    const answer = useSelector(selectAnswer);
    const answerArray = answer.split("");
    const length = answer.length;

    function getMatchResult(guess) {
        let matchingInfo = [];
        let matchingMap = new Map();
        let guessArray = guess.split("");
        for (var i = 0; i < length; i++) {
            matchingInfo.push(0);
            if (!matchingMap.has(answerArray[i])) {
                matchingMap.set(answerArray[i], 1);
            } else {
                matchingMap.set(answerArray[i], matchingMap.get(answerArray[i]) + 1);
            }
        }

        for (i = 0; i < length; i++) {
            if (guessArray[i] === answerArray[i]) {
                matchingInfo[i] = 2;
                matchingMap.set(answerArray[i], matchingMap.get(answerArray[i]) - 1)
            }
        }

        for (i = 0; i < length; i++) {
            if (matchingInfo[i] !== 2) {
                if (matchingMap.get(guessArray[i]) > 0) {
                    matchingInfo[i] = 1;
                    matchingMap.set(guessArray[i], matchingMap.get(guessArray[i]) - 1)
                }
            }
        }

        var output = guessArray.map((item, index) => 
            <span className=
                {matchingInfo[index] === 2 ? 
                styles.green : matchingInfo[index] === 1 ? styles.yellow : styles.gray}>{item}
            </span>);
        return (<div>{output}</div>)
    }

    var output = history.map((item) => <div>{getMatchResult(item)}</div>)
    return(<div>{output}</div>)
}

export default WordChecker;