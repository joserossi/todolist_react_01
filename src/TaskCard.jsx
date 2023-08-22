import { useState } from "react"

export function TaskCard ({ task, isDone, isActive}) {

    const [done, setDone] = useState(isDone)
    const textClassName = done ? 'task-card-texto task-card-texto-done' : 'task-card-texto'

    const handleClickDone = () => (
        setDone(!done)
    )

    const button_icons = {
        dn: 'o',
        und: '✓'
    }

    let done_button;
    if (done) {
        done_button = 'o'
    }else{
        done_button = '✓'
    }

    return (
        <div className="task-card">
            <p className={textClassName}>{ task }</p>
            <div className="task-card-botones">
                <button 
                    className="task-card-boton" 
                    onClick={handleClickDone}>
                        {done_button}
                    </button>
                <button className="task-card-boton">X</button>
            </div>
        </div>
    )
}