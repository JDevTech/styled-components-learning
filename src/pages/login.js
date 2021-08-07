import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { PageLayout, Button, InputText, PasswordInput, Spinner } from 'components'

const LoginForm = styled.form`
    width: 100%;
    max-width: 400px;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;

    .alt-text{
        text-align: center;
        margin: 10px 0px;
    }

    >${Button}:first-of-type{
        margin-top: 40px;
    }

    >${InputText}{
        margin-top: 20px;
    }
`

let timeout;

const LoginPage = (props) => {
    const [formFields, setFormFields] = useState({ username: '', password: ''})
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        timeout = setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    useEffect(() => {
        return () => {
            if(timeout){
                clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <PageLayout>
            <h1>Login Page</h1>
            <LoginForm onSubmit={handleSubmit}>
                {loading ? <Spinner /> : 
                    <>
                        <InputText value={formFields.username} onChange={handleInputChange} name="username" type="text" placeholder="Username"/>
                        <PasswordInput value={formFields.password} onChange={handleInputChange} name="password"/>
                    </>
                }
                <Button large type="submit" disabled={loading}>{loading ? 'Loading...': 'Login'}</Button>
                {!loading && 
                    <>
                        <div className="alt-text">or</div>
                        <Button secondary type="button">Register</Button>
                    </>
                }
            </LoginForm>
        </PageLayout>
    )
}

export default LoginPage