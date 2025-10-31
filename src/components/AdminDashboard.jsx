import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Target, Users, Building2, GraduationCap, TrendingUp, Settings, LogOut, Plus, Edit, Trash2, Lock, Unlock, Search, Filter, Download, BarChart3 } from 'lucide-react';

// Mock data import (en producción vendría de mockData.js)
const mockData = {
  institutions: [
    { id: 'inst_001', name: 'Universidad Nacional', studentsCount: 3500, status: 'active' },
    { id: 'inst_002', name: 'Universidad de Antioquia', studentsCount: 2800, status: 'active' },
    { id: 'inst_003', name: 'Universidad del Valle', studentsCount: 2200, status: 'blocked' }
  ],
  companies: [
    { id: 'comp_001', name: 'Bancolombia S.A.', activeInterns: 85, status: 'active' },
    { id: 'comp_002', name: 'Grupo Éxito', activeInterns: 62, status: 'active' },
    { id: 'comp_003', name: 'Ruta N', activeInterns: 45, status: 'active' }
  ],
  hiringStats: [
    { month: 'Ene', hired: 45, notHired: 23 },
    { month: 'Feb', hired: 52, notHired: 28 },
    { month: 'Mar', hired: 48, notHired: 25 },
    { month: 'Abr', hired: 55, notHired: 30 },
    { month: 'May', hired: 61, notHired: 27 },
    { month: 'Jun', hired: 58, notHired: 32 }
  ],
  qualityAttributes: [
    { attribute: 'Aplicación conocimientos', value: 85 },
    { attribute: 'Calidad trabajo', value: 88 },
    { attribute: 'Resolución problemas', value: 90 },
    { attribute: 'Trabajo equipo', value: 92 },
    { attribute: 'Comunicación', value: 87 },
    { attribute: 'Adaptabilidad', value: 89 }
  ]
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedEntity, setSelectedEntity] = useState(null);

  const stats = [
    { label: 'Instituciones', value: '45', icon: <GraduationCap className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500', change: '+12%' },
    { label: 'Empresas', value: '128', icon: <Building2 className="w-8 h-8" />, color: 'from-purple-500 to-pink-500', change: '+8%' },
    { label: 'Estudiantes Activos', value: '8,450', icon: <Users className="w-8 h-8" />, color: 'from-green-500 to-emerald-500', change: '+15%' },
    { label: 'Tasa Contratación', value: '72%', icon: <TrendingUp className="w-8 h-8" />, color: 'from-orange-500 to-red-500', change: '+5%' }
  ];

  const handleAction = (action, entity, type) => {
    console.log(`${action} ${type}:`, entity);
    setSelectedEntity(entity);
    setModalType(`${action}_${type}`);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEntity(null);
    setModalType('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Panel de Administrador</h1>
                <p className="text-sm text-slate-400">Carlos Administrador</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-slate-300" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                <LogOut className="w-5 h-5 text-slate-300" />
                <span className="text-slate-300">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-slate-800/30 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {['overview', 'institutions', 'companies', 'attributes', 'forms'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-orange-500 bg-slate-800/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {tab === 'overview' && 'Vista General'}
                {tab === 'institutions' && 'Instituciones'}
                {tab === 'companies' && 'Empresas'}
                {tab === 'attributes' && 'Atributos'}
                {tab === 'forms' && 'Formularios'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Hiring Trends */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Tendencias de Contratación</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData.hiringStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    <Legend />
                    <Line type="monotone" dataKey="hired" stroke="#10b981" strokeWidth={2} name="Contratados" />
                    <Line type="monotone" dataKey="notHired" stroke="#ef4444" strokeWidth={2} name="No Contratados" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Quality Attributes Radar */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Atributos de Calidad Promedio</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={mockData.qualityAttributes}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="attribute" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="Promedio" dataKey="value" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Institutions Tab */}
        {activeTab === 'institutions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gestión de Instituciones</h2>
              <button
                onClick={() => handleAction('create', null, 'institution')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>Nueva Institución</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar institución..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Institutions Table */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Institución</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Estudiantes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Estado</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockData.institutions.map((inst) => (
                    <tr key={inst.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium">{inst.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{inst.studentsCount.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          inst.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {inst.status === 'active' ? 'Activo' : 'Bloqueado'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            onClick={() => handleAction('edit', inst, 'institution')}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4 text-slate-300" />
                          </button>
                          <button
                            onClick={() => handleAction(inst.status === 'active' ? 'block' : 'unblock', inst, 'institution')}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          >
                            {inst.status === 'active' ? 
                              <Lock className="w-4 h-4 text-orange-400" /> : 
                              <Unlock className="w-4 h-4 text-green-400" />
                            }
                          </button>
                          <button
                            onClick={() => handleAction('delete', inst, 'institution')}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gestión de Empresas</h2>
              <button
                onClick={() => handleAction('create', null, 'company')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                <Plus className="w-5 h-5" />
                <span>Nueva Empresa</span>
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar empresa..."
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Empresa</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Practicantes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Estado</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {mockData.companies.map((comp) => (
                    <tr key={comp.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-medium">{comp.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{comp.activeInterns}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                          Activo
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-slate-300" />
                          </button>
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                            <Lock className="w-4 h-4 text-orange-400" />
                          </button>
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Attributes Tab */}
        {activeTab === 'attributes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gestión de Atributos de Calidad</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all">
                <Plus className="w-5 h-5" />
                <span>Nuevo Atributo</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mockData.qualityAttributes.map((attr, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{attr.attribute}</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-slate-300" />
                      </button>
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Valor Actual</span>
                      <span className="text-orange-400 font-semibold">{attr.value}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${attr.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Forms Tab */}
        {activeTab === 'forms' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Gestión de Formularios</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Formulario Instituciones</h3>
                    <p className="text-sm text-slate-400">12 campos activos</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2">
                    <Edit className="w-5 h-5" />
                    <span>Modificar Campos</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Exportar Estructura</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Formulario Empresas</h3>
                    <p className="text-sm text-slate-400">15 campos activos</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2">
                    <Edit className="w-5 h-5" />
                    <span>Modificar Campos</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Exportar Estructura</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              {modalType.includes('create') ? 'Crear' : modalType.includes('edit') ? 'Editar' : 'Confirmar Acción'}
            </h3>
            <p className="text-slate-400 mb-6">
              {modalType.includes('delete') && 'Esta acción no se puede deshacer.'}
              {modalType.includes('block') && 'El usuario no podrá acceder al sistema.'}
              {modalType.includes('unblock') && 'El usuario recuperará el acceso al sistema.'}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}