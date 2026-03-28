import { useState } from "react"

function Todo() {
    const [todo, settodo] = useState([])
    const [input, setinput] = useState("")

    function addTodo(e) {

        if (input.trim() === "") return;

        settodo((t) => [...t, input]); // add new todo
        setinput("")
    }
    function removebtn(index) {
        settodo(t => t.filter((_, i) => i !== index))
    }

    function taskcompleted(index){
        
    }

    return (

        <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-md shadow-2xl shadow-black/60">

                <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-tight">
                    TO<span className="text-amber-400">DO</span>
                </h1>

                <input
                    className="border border-zinc-700 rounded-2xl text-center w-full px-4 py-3 bg-zinc-800 text-white placeholder-zinc-500 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 transition-all mb-3"
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    id="todo"
                    placeholder="enter your task....."
                />

                <button
                    onClick={addTodo}
                    className="w-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-zinc-950 font-bold py-3 rounded-2xl transition-all mb-8"
                >
                    ADD TODO
                </button>

                <ul className="space-y-3">
                    {todo.map((work, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3"
                        >
                            <input type="radio" onChange={()=>taskcompleted(index)} />
                            <li className="text-zinc-100 text-sm list-none">{work}</li>
                            <button
                                onClick={() => removebtn(index)}
                                className="text-zinc-500 hover:text-red-400 text-xs font-medium transition-colors"
                            >
                                remove
                            </button>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Todo