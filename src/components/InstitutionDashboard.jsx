import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Target, Users, TrendingUp, TrendingDown, GraduationCap, Building2, Upload, BarChart3, Settings, LogOut, Download, FileText, Award } from 'lucide-react';

const mockData = {
  institution: {
    name: 'Universidad Nacional de Colombia',
    studentsCount: 3500,
    activeInternships: 450,
    graduatesLastYear: 1200
  },
  hiringStats: [
    { month: 'Ene', hired: 45, notHired: 23, inProgress: 32 },
    { month: 'Feb', hired: 52, notHired: 28, inProgress: 38 },
    { month: 'Mar', hired: 48, notHired: 25, inProgress: 35 },
    { month: 'Abr', hired: 55, notHired: 30, inProgress: 40 },
    { month: 'May', hired: 61, notHired: 27, inProgress: 42 },
    { month: 'Jun', hired: 58, notHired: 32, inProgress: 45 }
  ],
  topSkills: [
    { skill: 'Trabajo en Equipo', value: 92 },
    { skill: 'Comunicación', value: 88 },
    { skill: 'Resolución Problemas', value: 90 },
    { skill: 'Adaptabilidad', value: 87 },
    { skill: 'Liderazgo', value: 82 },
    { skill: 'Pensamiento Crítico', value: 85 }
  ],
  companyHeatmap: [
    { company: 'Bancolombia', Jan: 15, Feb: 18, Mar: 16, Apr: 20, May: 22, Jun: 19 },
    { company: 'Grupo Éxito', Jan: 12, Feb: 14, Mar: 13, Apr: 16, May: 18, Jun: 17 },
    { company: 'Ruta N', Jan: 8, Feb: 10, Mar: 9, Apr: 11, May: 13, Jun: 12 },
    { company: 'Grupo SURA', Jan: 10, Feb: 11, Mar: 12, Apr: 13, May: 14, Jun: 15 }
  ],
  studentStatus: [
    { name: 'En Prácticas', value: 450, color: '#10b981' },
    { name: 'Buscando', value: 320, color: '#f59e0b' },
    { name: 'Contratados', value: 680, color: '#3b82f6' },
    { name: 'Sin Prácticas', value: 150, color: '#ef4444' }
  ]
};

export default function InstitutionDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const stats = [
    { 
      label: 'Estudiantes Totales', 
      value: '3,500', 
      icon: <Users className="w-8 h-8" />, 
      color: 'from-blue-500 to-cyan-500',
      change: '+12%',
      trend: 'up'
    },
    { 
      label: 'En Prácticas', 
      value: '450', 
      icon: <Building2 className="w-8 h-8" />, 
      color: 'from-green-500 to-emerald-500',
      change: '+8%',
      trend: 'up'
    },
    { 
      label: 'Contratados Post-Práctica', 
      value: '68%', 
      icon: <Award className="w-8 h-8" />, 
      color: 'from-purple-500 to-pink-500',
      change: '+5%',
      trend: 'up'
    },
    { 
      label: 'Buscando Prácticas', 
      value: '320', 
      icon: <TrendingUp className="w-8 h-8" />, 
      color: 'from-orange-500 to-red-500',
      change: '-3%',
      trend: 'down'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{mockData.institution.name}</h1>
                <p className="text-sm text-slate-400">Panel de Institución</p>
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

      {/* Navigation */}
      <div className="bg-slate-800/30 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1">
            {['overview', 'students', 'companies', 'upload'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-blue-500 bg-slate-800/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {tab === 'overview' && 'Vista General'}
                {tab === 'students' && 'Estudiantes'}
                {tab === 'companies' && 'Empresas'}
                {tab === 'upload' && 'Subir Datos'}
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
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="flex items-center space-x-1">
                      {stat.trend === 'up' ? <TrendingUp className="w-4 h-4 text-green-400" /> : <TrendingDown className="w-4 h-4 text-red-400" />}
                      <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Hiring Trends */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Tendencias de Contratación</h3>
                  <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-slate-300" />
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={mockData.hiringStats}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    <Legend />
                    <Bar dataKey="hired" fill="#10b981" name="Contratados" />
                    <Bar dataKey="notHired" fill="#ef4444" name="No Contratados" />
                    <Bar dataKey="inProgress" fill="#f59e0b" name="En Proceso" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Student Status Pie */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Estado de Estudiantes</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={mockData.studentStatus}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {mockData.studentStatus.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Top Skills Radar */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Habilidades Destacadas</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={mockData.topSkills}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="skill" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="Promedio" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Company Heatmap */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Empresas Más Activas</h3>
                <div className="space-y-4">
                  {mockData.companyHeatmap.map((company, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">{company.company}</span>
                        <span className="text-blue-400 font-semibold">{company.Jun} contrataciones</span>
                      </div>
                      <div className="flex space-x-1">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => {
                          const value = company[month];
                          const intensity = value / 25;
                          return (
                            <div
                              key={month}
                              className="flex-1 h-8 rounded transition-all hover:scale-105"
                              style={{
                                backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                                border: '1px solid rgba(59, 130, 246, 0.3)'
                              }}
                              title={`${month}: ${value}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Información de Estudiantes</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all">
                <FileText className="w-5 h-5" />
                <span>Generar Reporte</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Graduados Último Año</h3>
                <p className="text-4xl font-bold text-blue-400 mb-2">1,200</p>
                <p className="text-slate-400 text-sm">Total de egresados en 2024</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">En Prácticas Activas</h3>
                <p className="text-4xl font-bold text-green-400 mb-2">450</p>
                <p className="text-slate-400 text-sm">Estudiantes actualmente en empresas</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Tasa de Contratación</h3>
                <p className="text-4xl font-bold text-purple-400 mb-2">68%</p>
                <p className="text-slate-400 text-sm">Contratados después de prácticas</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Rendimiento por Competencias</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={mockData.topSkills} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="skill" type="category" stroke="#94a3b8" width={150} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Companies Tab */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Empresas Colaboradoras</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Bancolombia', 'Grupo Éxito', 'Ruta N', 'Grupo SURA'].map((company, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{company}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Practicantes:</span>
                      <span className="text-white font-semibold">{[19, 17, 12, 15][idx]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contratados:</span>
                      <span className="text-green-400 font-semibold">{[15, 12, 10, 11][idx]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Seguimiento de Contrataciones</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={mockData.hiringStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  <Legend />
                  <Line type="monotone" dataKey="hired" stroke="#10b981" strokeWidth={3} name="Contratados" />
                  <Line type="monotone" dataKey="inProgress" stroke="#f59e0b" strokeWidth={3} name="En Proceso" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === 'upload' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Subir Información al Sistema</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Upload className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Información de Estudiantes</h3>
                  <p className="text-slate-400 mb-6">Sube datos sobre estudiantes, prácticas y rendimiento académico</p>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Subir Archivo
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Perfiles de Carrera</h3>
                  <p className="text-slate-400 mb-6">Actualiza información sobre programas académicos y perfiles profesionales</p>
                  <button
                    onClick={() => setShowUploadModal(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Subir Archivo
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Instrucciones</h3>
              <div className="space-y-3 text-slate-300">
                <p>• Los archivos deben estar en formato CSV, Excel (.xlsx) o JSON</p>
                <p>• Máximo 10MB por archivo</p>
                <p>• Incluye los campos requeridos según la plantilla proporcionada</p>
                <p>• Los datos se validarán antes de ser procesados</p>
              </div>
              <button className="mt-4 flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Download className="w-5 h-5" />
                <span>Descargar plantilla de ejemplo</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-lg w-full border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Subir Información</h3>
            
            <div className="border-2 border-dashed border-slate-600 rounded-xl p-12 mb-6 text-center hover:border-blue-500 transition-all cursor-pointer">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-white mb-2">Arrastra tu archivo aquí</p>
              <p className="text-slate-400 text-sm">o haz clic para seleccionar</p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Subir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}