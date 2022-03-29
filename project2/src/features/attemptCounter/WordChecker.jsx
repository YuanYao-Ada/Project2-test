import { useSelector } from "react-redux";
import styles from "./style.module.css"
import { selectAnswer } from "./wordSlice";

// {
    // "easy": [10 words]
//
//}

// state:
// [
// counter:
// difficultyLevel
// wordMap
// selectedWord
// input]
//
// TODO:
// 1. Game rule page 
// 2. Redux
// 3. reset game
// 4. difficulty set in url

// difficulty -> 0-9 random index -> update state

function WordChecker(props) {
    const ifShow = props.ifShow;
    const answer = useSelector(selectAnswer);
    const length = answer.length;
    const guess = props.guess;
    let guessArray = guess.split("");
    let answerArray = answer.split("");
    var matchingInfo = [];
    let matchingMap = new Map();

    for (var i = 0; i < length; i++) {
        matchingInfo.push(0);
        if (!matchingMap.has(answerArray[i])) {
            matchingMap.set(answerArray[i], 1);
        } else {
            matchingMap.set(answerArray[i], matchingMap.get(answerArray[i]) + 1);
        }
    }

    for (var i = 0; i < length; i++) {
        if (guessArray[i] === answerArray[i]) {
            matchingInfo[i] = 2;
            matchingMap.set(answerArray[i], matchingMap.get(answerArray[i]) - 1)
        }
    }

    for (var i = 0; i < length; i++) {
        if (matchingInfo[i] != 2) {
            if (matchingMap.get(guessArray[i]) > 0) {
                matchingInfo[i] = 1;
                matchingMap.set(guessArray[i], matchingMap.get(guessArray[i]) - 1)
            }
        }
        
    }

    if (!ifShow) {
        return (
            <div></div>
        )
    } else {
        if (guess.length !== answer.length) {
            return (
                <div>
                    The length should be {answer.length}
                </div>
            )
        
        } else {
            var output = guessArray.map((item, index) => 
                <span className=
                    {matchingInfo[index] === 2 ? 
                    styles.green : matchingInfo[index] === 1 ? styles.yellow : styles.gray}>{item}
                </span>);
            if (guess === answer) {
                return (
                    <div>Cong! You win the game!</div>
                )
            } else {
                return (
                    <div>{output}</div>
                )
            }
        }
    }
}

export default WordChecker;