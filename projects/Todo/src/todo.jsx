import { useState } from "react"

function Todo() {
    const [todo, settodo] = useState([])
    const [input, setinput] = useState("")

    function addTodo() {
        if (input.trim() === "") return;
        settodo((t) => [...t, { id: Date.now(), text: input, completed: false }]);
        setinput("")
    }

    function removebtn(id) {
        settodo(t => t.filter((item) => item.id !== id))
    }

    function taskCompleted(id) {
        settodo(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function moveup(index) {
        if(index>0){
            const updatetask = [...todo];
            [updatetask[index], updatetask[index-1]] =  [updatetask[index-1], updatetask[index]];
            settodo(updatetask)
        }
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
                    onKeyDown={(e) => e.key === "Enter" && addTodo()}
                    placeholder="enter your task....."
                />
                <div className="flex gap-2">
                    <button
                        onClick={addTodo}
                        className="w-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-zinc-950 font-bold py-3 rounded-2xl transition-all mb-8"
                    >
                        ADD TODO
                    </button>
                    {todo.length > 0 && (
                        <button
                            onClick={() => settodo([])}
                            className="w-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-zinc-950 font-bold py-3 rounded-2xl transition-all mb-8"
                        >
                            REMOVE ALL
                        </button>
                    )}
                </div>

                <ul className="space-y-3">
                    {todo.map((work,index) => (
                        <div
                            key={work.id}
                            className="flex items-center justify-between bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-3"
                        >
                            <input
                                type="radio"
                                checked={work.completed}
                                onChange={() => taskCompleted(work.id)}
                                className="accent-amber-400 w-4 h-4 cursor-pointer"
                            />
                            <li
                                className={`text-sm list-none transition-all ${work.completed
                                    ? "line-through text-zinc-500"
                                    : "text-zinc-100"
                                    }`}
                            >
                             {index+1}.  {work.text}
                            </li>
                            <div className="flex gap-2">

                                <button
                                    onClick={() => removebtn(work.id)}
                                    className="text-zinc-500 hover:text-red-400 text-xs font-medium transition-colors"
                                >
                                    remove
                                </button>

                                <button className="text-zinc-500 hover:text-red-400 text-xs font-medium transition-colors" onClick={() =>moveup(index)}>move up</button>

                                
                            </div>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Todo