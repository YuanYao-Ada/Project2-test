import styles from "./style.module.css"

function WordChecker(props) {
    const ifShow = props.ifShow;
    if (!ifShow) {
        return (
            <div></div>
        )
    } else {
        const guess = props.guess;
        let guessArray = guess.split("");

        if (guess.length !== 5) {
            return (
                <div>
                    The length should be five
                </div>
            )
        
        } else {
        var output = guessArray.map(item => <span className={item === "a" ? styles.green : styles.red}>{item}</span>);
        return (
            <div>{output}</div>
        )
    }
    
    }
    
}

export default WordChecker;