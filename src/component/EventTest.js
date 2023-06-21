export default function EventTest(){
    
    // 이름 출력 메소드
    function showName(){
        console.log("안녕 순희");
    }
    // 나이 출력 메소드
    function showAge(age){
        console.log('나이',age);
    }
    // input 값 출력 메소드
    function showText(e){
        console.log('입력값',e.target.value);
    }
    // input 값 출력 메소드2
    function showText2(txt){
        console.log(txt);
    }

    return(
        <>
            <div>
                <h1>EventTest</h1>
                <button onClick={showName}>Show name1</button>
                <button onClick={showAge}>Show age</button>
            </div>
            <div>
                <button onClick={() => showAge(31)}>Show age</button>
            </div>
            <div>
                <input type="text" onChange={showText}/>
                <input type="text" onChange={(e)=>{showText2(e.target.value)}}/>
            </div>
        </>
    )
}