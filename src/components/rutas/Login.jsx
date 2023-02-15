import React, { useState } from 'react'
import axios from 'axios';
function decodeJWT(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
}
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const usuario1 = {
        email: 'admin@gmail.com',
        password: 'password'
    };

    const usuario2 = {
        email: 'usuario2@correo.com',
        password: 'contraseña2'
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Resetear estado de errores
        setErrorEmail(false);
        setErrorPassword(false);
        if (!email) {
            setErrorEmail(true);
        }
        if (!password) {
            setErrorPassword(true);
        }
        // Si hay algún error, terminamos la función
        if (errorEmail || errorPassword) {
            return;
        }
        axios.post('https://authserve-production.up.railway.app/auth/login', { email, password })
            .then(res => {
                // Aquí puedes manejar la respuesta del servidor
                console.log(res.data);
                const decoded = decodeJWT(res.data.token)
                console.log(decoded)

                if (decoded.role === 'ADMIN') {
                    localStorage.setItem('rol', 'Admin');
                    localStorage.setItem('token', res.data.token);
                    console.log(res.data.token)
                    window.location.reload();

                } else if (decoded.role === 'REPARTIDOR') {
                    localStorage.setItem('rol', 'Repartidor');
                    localStorage.setItem('token', res.data.token);
                    console.log(res.data.token)
                    window.location.reload();

                } else {
                    setMessage('Correo o contraseña incorrectos');
                }
            })
            .catch(err => {
                console.error(err);
                setMessage('Correo o contraseña incorrectos');
  });

        /*if (email === usuario1.email && password === usuario1.password) {
            localStorage.setItem('rol', 'Admin')
            // Recargar la página
            window.location.reload();
        } else if (email === usuario2.email && password === usuario2.password) {
            localStorage.setItem('rol', 'Repartidor')
            // Recargar la página
            window.location.reload();
        } else {
            setMessage('Correo o contraseña incorrectos');
        }*/

    };

    return (
        <div className="bg-gray-100 flex justify-center  h-screen">
            <div class="h-2 bg-primary"></div>

            <div class="container mx-auto p-8">
                <div class="mx-auto max-w-sm">
                    <div class="w-3/5 text-center mx-auto pb-3">
                        <img src='./images/logo-template.png' className='p-0 mx-auto my-auto' />
                    </div>


                    <div class="bg-white rounded shadow drop-shadow-xl">
                        <div class="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                            Bienvenido!
                        </div>
                        <form class="bg-gray-50 px-10 py-10" onSubmit={handleSubmit}>


                            <div class="mb-3 drop-shadow-lg">
                                <input class="border bg-white w-full p-3 text-black-100" name="email" type="text" placeholder="E-Mail" value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            {errorEmail && <span className="text-red-500">El campo correo es requerido</span>}
                            <div class="mb-6 drop-shadow-lg">
                                <input class="border bg-white w-full p-3 text-black-100" name="password" type="password" placeholder="**************" value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            {errorPassword && <span className="text-red-500">El campo contraseña es requerido</span>}
                            <div class="flex">
                                <button class=" bg-green-100 w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
                                    Login
                                </button>
                            </div>
                            {message && <p className="text-red-500">{message}</p>}

                        </form>

                        <div class="border-t px-10 py-6">
                            <div class="flex justify-between">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login