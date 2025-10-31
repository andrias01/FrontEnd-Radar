import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Target, ArrowLeft, Building2, GraduationCap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function RadarLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('institution');
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, userType, isLogin });
    // TODO: Conectar con backend - endpoint: /api/auth/login o /api/auth/register
    // Ejemplo de estructura para la llamada:
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: formData.email, password: formData.password, userType })
    // });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`, userType);
    // TODO: Conectar con backend OAuth - endpoint: /api/auth/oauth/${provider}
    // window.location.href = `/api/auth/oauth/${provider}?userType=${userType}`;
  };

  const userTypes = [
    {
      id: 'institution',
      label: 'Institución',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'company',
      label: 'Empresa',
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'admin',
      label: 'Administrador',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-5xl">
        <button 
          onClick={() => window.history.back()}
          className="mb-6 flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="hidden lg:flex flex-col justify-center space-y-8 bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold text-white">RADAR</span>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white leading-tight">
                Bienvenido de vuelta
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Accede a tu panel de control y descubre insights valiosos sobre el talento educativo y las oportunidades laborales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Análisis en Tiempo Real</h4>
                  <p className="text-slate-400 text-sm">Visualiza estadísticas actualizadas de estudiantes y empresas</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-400 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Conexión Directa</h4>
                  <p className="text-slate-400 text-sm">Comunícate con instituciones o empresas de forma efectiva</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Datos Seguros</h4>
                  <p className="text-slate-400 text-sm">Tu información protegida con los más altos estándares</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-purple-500/30">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </h3>
              <p className="text-slate-400">
                {isLogin ? 'Ingresa tus credenciales para continuar' : 'Completa el formulario para registrarte'}
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Tipo de Usuario
              </label>
              <div className="grid grid-cols-3 gap-3">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setUserType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      userType === type.id
                        ? `bg-gradient-to-br ${type.color} border-transparent shadow-lg`
                        : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className={userType === type.id ? 'text-white' : 'text-slate-400'}>
                        {type.icon}
                      </div>
                      <span className={`text-xs font-semibold ${
                        userType === type.id ? 'text-white' : 'text-slate-400'
                      }`}>
                        {type.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialLogin('google')}
                className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continuar con Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin('github')}
                className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Continuar con GitHub</span>
              </button>

              <button
                onClick={() => handleSocialLogin('facebook')}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Continuar con Facebook</span>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-800 text-slate-400">o continúa con</span>
              </div>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Nombre {userType === 'institution' ? 'de la Institución' : userType === 'company' ? 'de la Empresa' : 'Completo'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={`Ingresa tu ${userType === 'admin' ? 'nombre' : 'nombre de ' + (userType === 'institution' ? 'institución' : 'empresa')}`}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Confirmar Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500 focus:ring-offset-slate-800"
                    />
                    <span className="text-sm text-slate-300">Recordarme</span>
                  </label>
                  <button 
                    type="button"
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link to="/AdminDashboard">
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </Link>
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <Link to="/AdminDashboard">
                  admin prueba
                </Link>
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <Link to="/institutionDashboard">
                  intitución prueba
                </Link>
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <Link to="/companyDashboard">
                  empresa prueba
                </Link>
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-slate-400">
                {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                {' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}