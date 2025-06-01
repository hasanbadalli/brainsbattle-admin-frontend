import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/authSlice';
import styles from '../../styles/Login.module.scss';
import logo from '../../public/assets/53fbbc6b2066c1e81a599c0fc208dd6e944c6759.png'
const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateUsername = (username) => /^[a-zA-Z0-9_]{3,}$/.test(username);
  const validatePassword = (password) => /^(?=.*\d).{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(validateEmail(form.email) || validateUsername(form.email))) {
      return toast.error("E-poçt və ya istifadəçi adı düzgün deyil.");
    }
    if (!validatePassword(form.password)) {
      return toast.error("Şifrə ən azı 8 simvoldan ibarət olmalı və ən azı bir rəqəm daxil edilməlidir.");
    }

    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (token) {
      toast.success("Giriş uğurlu oldu!");
      setTimeout(() => navigate('/'), 2000);
    }
    if (error) {
      toast.error(error);
    }
  }, [token, error, navigate]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="BrainsBattle" />
      </div>

      <div className={styles.inputLogin}>
        <div className={styles.loginCard}>
          <h2>Giriş</h2>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-poçt və ya İstifadəçi adı</label>
              <div className={styles.inputWrapper}>
                <User size={20} className={styles.inputIcon} />
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  placeholder="E-poçt və ya istifadəçi adı daxil edin"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Şifrə</label>
              <div className={styles.inputWrapper}>
                <Lock size={20} className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                  placeholder="Şifrənizi daxil edin"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles.passwordToggle}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.loginButton} disabled={loading}>
              {loading ? 'Giriş edilir...' : 'Giriş et'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
