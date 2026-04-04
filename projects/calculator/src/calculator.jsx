import { useState } from "react"

function Calculator() {
    const [result, setResult] = useState("")

    function appendToDisplay(input) {
        const operators = ["+", "-", "*", "/"]

      
        if (operators.includes(input) && result === "") return

        // Prevent two operators in a row
        if (operators.includes(input) && operators.includes(result.slice(-1))) return

        setResult(prev => prev + input)
    }

    function calculate() {
        try {
            setResult(String(eval(result)))
        } catch {
            setResult("Error")
        }
    }

    function clear() {
        setResult("")
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-400">
            <div className="bg-amber-200 w-64 flex flex-col text-center">
                <input
                    className="border text-right p-2"
                    type="text"
                    value={result}
                    readOnly
                />
                <div className="border grid grid-cols-4 font-bold gap-4 p-2">
                    <button onClick={() => appendToDisplay('+')}>+</button>
                    <button onClick={() => appendToDisplay('7')}>7</button>
                    <button onClick={() => appendToDisplay('8')}>8</button>
                    <button onClick={() => appendToDisplay('9')}>9</button>
                    <button onClick={() => appendToDisplay('-')}>-</button>
                    <button onClick={() => appendToDisplay('4')}>4</button>
                    <button onClick={() => appendToDisplay('5')}>5</button>
                    <button onClick={() => appendToDisplay('6')}>6</button>
                    <button onClick={() => appendToDisplay('*')}>*</button>
                    <button onClick={() => appendToDisplay('1')}>1</button>
                    <button onClick={() => appendToDisplay('2')}>2</button>
                    <button onClick={() => appendToDisplay('3')}>3</button>
                    <button onClick={() => appendToDisplay('/')}>/</button>
                    <button onClick={() => appendToDisplay('0')}>0</button>
                    <button onClick={() => appendToDisplay('.')}>.</button>
                    <button onClick={clear}>Clear</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator