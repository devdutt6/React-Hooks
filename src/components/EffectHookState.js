import React, { useState,useEffect }from 'react'

export const EffectHookState = () => {
    const [count , setCount] = useState(0);
    const [name , setName] = useState('');

    useEffect(() => {
        console.log('useEffect-update');
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input
            type='text'
            value={name}
            onChange={e => {
                setName(e.target.value)
            }} />
            <button onClick={() => setCount(count +1)}>Click {count}</button>
        </div>
    )
}
