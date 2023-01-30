import React, { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const usuario1 = {
        email: 'usuario1@correo.com',
        password: 'contraseña1'
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

        if (email === usuario1.email && password === usuario1.password) {
            localStorage.setItem('rol', 'Admin')
            // Recargar la página
            window.location.reload();
        } else if (email === usuario2.email && password === usuario2.password) {
            localStorage.setItem('rol', 'Repartidor')
            // Recargar la página
            window.location.reload();
        } else {
            setMessage('Correo o contraseña incorrectos');
        }

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
                                <input class="border w-full p-3" name="email" type="text" placeholder="E-Mail" value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            {errorEmail && <span className="text-red-500">El campo correo es requerido</span>}
                            <div class="mb-6 drop-shadow-lg">
                                <input class="border w-full p-3" name="password" type="password" placeholder="**************" value={password}
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            {errorPassword && <span className="text-red-500">El campo contraseña es requerido</span>}
                            <div class="flex">
                                <button class="bg-primary bg-green-100 w-full p-4 text-sm text-white uppercase font-bold tracking-wider">
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