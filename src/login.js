import React, {useState, initialState} from 'react'

function LoginPage() {
    //useState는 react라이브러리에서 가져올 수 있음
    const [Email, setEmail] = useState(initialState)
    const [Password, setPassword] = useState(initialState)

    const onEmailHandler = (event) => {
        //currentTaget => Taget으로 써봄
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //preventDefault를 해주는 이유는 Login 버튼을 누를때마다 
        //페이지 refresh방지
        event.preventDefault();
        console.log({Email},{Password});
    }

    return(
        <div style = {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <form style = {{
                display:'flex', 
                flexDirection: 'column'
            }}
            onSubmit = {onSubmitHandler}            
        >

                <label>Email</label>
                <input type = "email" value = {Email} onChange = {onEmailHandler} />
                <label>Password</label>
                <input type = "password" value = {Password} onChange = {onPasswordHandler} />

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )

}

export default LoginPage