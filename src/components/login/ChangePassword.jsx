//import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import bcrypt from 'bcryptjs';
import { userApi } from '../../api/login/userApi';

const ChangePassword = () => {

    const navigate = useNavigate();

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    console.log(userInfo);

    const userOldPass = userInfo.password;
    console.log(userOldPass);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rNewPassword, setRNewPassword] = useState('');

    const updateHandler = async (e) => {
        e.preventDefault();

        async function compareIt(oldPassword) {
            const validPassword = await bcrypt.compare(oldPassword, userOldPass);

            //check old password is correct
            if (validPassword !== true) {
                toast.error('¡.La Contraseña Anterior NO Es Correcta.!');
                return;
            }

            //if new password === retype new password
            if (newPassword === rNewPassword) {
                try {

                    const { data } = await userApi.put('/update', {
                        _id: userInfo._id,
                        newPassword
                    });

                    localStorage.removeItem('userInfo', JSON.stringify(data));
                    toast.success('¡.Contraseña Actualizada Éxitosamente.!');
                    navigate('/login');

                } catch (error) {
                    toast.error('¡.Contraseña NO Actualizada.!');
                }
            } else {
                toast.error('¡.La Contraseña NO Coincide.!');
            }

        }
        compareIt(oldPassword);

    }

    return (
        <>
            <main className="mt-5">
                <div className="container">
                    {/*Section: Content*/}
                    <section>
                        <div className="row">
                            <div className="col-md-6 gx-5 mb-4">
                                <div className="col-xl-12 col-md-12">
                                    <div className="mb-6">
                                        {/* heading */}
                                        <h2 className="mb-0">Cambia La Contraseña. :*</h2>
                                    </div>
                                    <form onSubmit={updateHandler} className="bg-white rounded-5 shadow-5-strong p-5">
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" onChange={(e) => setOldPassword(e.target.value)} id="o_password" className="form-control" placeholder="**********" required />
                                            <label className="form-label" htmlFor="o_password">
                                                <i className="fas fa-key"></i> Contraseña Anterior. :*
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" onChange={(e) => setNewPassword(e.target.value)} id="password" className="form-control" placeholder="**********" required />
                                            <label className="form-label" htmlFor="password">
                                                <i className="fas fa-key"></i> Nueva Contraseña. :*
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" onChange={(e) => setRNewPassword(e.target.value)} id="r_password" className="form-control" placeholder="**********" required />
                                            <label className="form-label" htmlFor="r_password">
                                                <i className="fas fa-key"></i> Reescriba Nueva Contraseña. :*
                                            </label>
                                        </div>
                                        {/* Submit button */}
                                        <button className="btn btn-primary btn-block">
                                            <i className="fa-regular fa-pen-to-square"></i> Actualiza Contraseña.
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Section: Content*/}
                </div>
            </main>
        </>
    );
};

export default ChangePassword;