import React,{useEffect, useState} from 'react';

const Lifecycle = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    const UnmountTest = () => {
        console.log("Mount!")
        useEffect(() => {
            return () => {
                console.log("Unmount!");
            }

        }, []);
        return <div>Unmount Test Component</div>
    }

    useEffect(()=>{
        console.log("Mount!");
    },[]);

    useEffect(()=>{
        console.log(`${count}is updated`);
        if(count > 5) {
            alert("count가 5를 넘었습니다. 따라서 5로 초기화합니다.");
            setCount(1);
        }
    },[count]);

    useEffect(()=>{
        console.log(`${text}is updated`);
    
    },[text]);

    return <div style={{padding: 20}}>
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div>
            <input value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest/>}
        </div>
    </div>
};
export default Lifecycle;