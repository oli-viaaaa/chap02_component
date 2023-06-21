import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

export default function LoginRendering(){
    // isLoggedIn 상태 생성
    const [isLoggedIn, setIsLoggenId] = useState(false);

    // 로그인을 true로 변경함수
    function handleLogin(){
        setIsLoggenId(true);
        console.log("handleLogin 실행");
    }

    // 로그인을 false로 변경함수
    function handleLogout(){
        setIsLoggenId(false);
        console.log("handleLogout 실행");
    }

    return(
        <div>
            {/*로그인이 되어있으면 Logout 컴포넌트 호출
                - 프롭스로 로그아웃 함수 전달
                로그인이 안되어있으면 Login 컴포넌트 호출
                - 프롬스로 로그인 함수 전달*/}

                <h1>조건부 렌더링 예제</h1>

                {isLoggedIn ? (
                    // 자식 컴포넌트에서 호출할 함수를 전달한다.
                    <Logout onLogout={handleLogout} />
                ) : (
                    <Login onLogin={handleLogin} />
                )}
        </div>
    )
}