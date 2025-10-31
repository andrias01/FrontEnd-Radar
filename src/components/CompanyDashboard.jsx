import React, { useState } from 'react';
import { BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Target, Building2, Users, Star, TrendingUp, Search, Filter, FileText, Settings, LogOut, Eye, Award, CheckCircle, Clock, MessageSquare } from 'lucide-react';

const mockData = {
  company: {
    name: 'Bancolombia S.A.',
    activeInterns: 85,
    evaluationsPending: 12
  },
  institutions: [
    { id: 1, name: 'Universidad Nacional', students: 3500, programs: ['Ing. Sistemas', 'Administración'] },
    { id: 2, name: 'Universidad de Antioquia', students: 2800, programs: ['Ing. Civil', 'Contaduría'] },
    { id: 3, name: 'Universidad del Valle', students: 2200, programs: ['Ing. Industrial', 'Marketing'] }
  ],
  interns: [
    {
      id: 1,
      name: 'Ana María González',
      institution: 'Universidad Nacional',
      program: 'Ingeniería de Sistemas',
      semester: 9,
      status: 'active',
      startDate: '2024-08-01',
      skills: {
        technical: 85,
        soft: 90,
        problemSolving: 88,
        teamwork: 92,
        communication: 87,
        adaptability: 89
      },
      evaluated: true,
      overallScore: 89
    },
    {
      id: 2,
      name: 'Carlos Andrés Pérez',
      institution: 'Universidad de Antioquia',
      program: 'Administración',
      semester: 10,
      status: 'active',
      startDate: '2024-09-01',
      skills: {
        technical: 82,
        soft: 88,
        problemSolving: 85,
        teamwork: 90,
        communication: 86,
        adaptability: 87
      },
      evaluated: false,
      overallScore: null
    },
    {
      id: 3,
      name: 'Laura Valentina Rodríguez',
      institution: 'Universidad Nacional',
      program: 'Ingeniería Industrial',
      semester: 8,
      status: 'completed',
      startDate: '2024-02-01',
      endDate: '2024-07-30',
      skills: {
        technical: 88,
        soft: 94,
        problemSolving: 86,
        teamwork: 95,
        communication: 93,
        adaptability: 91
      },
      evaluated: true,
      overallScore: 91,
      hired: true
    }
  ],
  demandedProfessions: [
    { name: 'Ing. Sistemas', demand: 95, openPositions: 45 },
    { name: 'Ing. Industrial', demand: 88, openPositions: 32 },
    { name: 'Administración', demand: 82, openPositions: 28 },
    { name: 'Contaduría', demand: 78, openPositions: 25 },
    { name: 'Marketing', demand: 85, openPositions: 30 }
  ],
  topSkills: [
    { skill: 'Trabajo en Equipo', value: 92, trend: 'up' },
    { skill: 'Comunicación', value: 88, trend: 'up' },
    { skill: 'Resolución Problemas', value: 90, trend: 'stable' },
    { skill: 'Adaptabilidad', value: 87, trend: 'up' },
    { skill: 'Liderazgo', value: 82, trend: 'up' },
    { skill: 'Pensamiento Crítico', value: 85, trend: 'stable' }
  ],
  marketTrends: [
    { month: 'Ene', demand: 78 },
    { month: 'Feb', demand: 82 },
    { month: 'Mar', demand: 85 },
    { month: 'Abr', demand: 88 },
    { month: 'May', demand: 92 },
    { month: 'Jun', demand: 95 }
  ]
};

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [showEvaluationModal, setShowEvaluationModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { 
      label: 'Practicantes Activos', 
      value: '85', 
      icon: <Users className="w-8 h-8" />, 
      color: 'from-purple-500 to-pink-500',
      change: '+12',
      trend: 'up'
    },
    { 
      label: 'Evaluaciones Pendientes', 
      value: '12', 
      icon: <Clock className="w-8 h-8" />, 
      color: 'from-orange-500 to-red-500',
      change: '-3',
      trend: 'down'
    },
    { 
      label: 'Contratados', 
      value: '62', 
      icon: <CheckCircle className="w-8 h-8" />, 
      color: 'from-green-500 to-emerald-500',
      change: '+18',
      trend: 'up'
    },
    { 
      label: 'Satisfacción Promedio', 
      value: '4.6', 
      icon: <Star className="w-8 h-8" />, 
      color: 'from-blue-500 to-cyan-500',
      change: '+0.3',
      trend: 'up'
    }
  ];

  const handleEvaluate = (intern) => {
    setSelectedIntern(intern);
    setShowEvaluationModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{mockData.company.name}</h1>
                <p className="text-sm text-slate-400">Panel de Empresa</p>
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
            {['overview', 'interns', 'institutions', 'market'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-purple-500 bg-slate-800/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {tab === 'overview' && 'Vista General'}
                {tab === 'interns' && 'Practicantes'}
                {tab === 'institutions' && 'Instituciones'}
                {tab === 'market' && 'Mercado'}
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
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Market Skills Radar */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Habilidades Más Valoradas</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={mockData.topSkills}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="skill" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="Mercado" dataKey="value" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Demand Trends */}
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Tendencia de Demanda</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={mockData.marketTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                    <Line type="monotone" dataKey="demand" stroke="#a855f7" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Professions */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Profesiones Más Demandadas</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData.demandedProfessions} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" width={120} />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="demand" fill="#a855f7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Interns Tab */}
        {activeTab === 'interns' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Gestión de Practicantes</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar practicante..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-500 transition-all">
                  <Filter className="w-5 h-5 text-slate-300" />
                </button>
              </div>
            </div>

            <div className="grid gap-6">
              {mockData.interns.map((intern) => (
                <div key={intern.id} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{intern.name}</h3>
                        <p className="text-slate-400 text-sm">{intern.program} - {intern.institution}</p>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            intern.status === 'active' ? 'bg-green-500/20 text-green-400' :
                            intern.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                            {intern.status === 'active' ? 'Activo' : intern.status === 'completed' ? 'Completado' : 'Pendiente'}
                          </span>
                          {intern.hired && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400">
                              Contratado
                            </span>
                          )}
                          {intern.evaluated && (
                            <span className="flex items-center space-x-1 text-xs text-green-400">
                              <CheckCircle className="w-4 h-4" />
                              <span>Evaluado</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedIntern(intern)}
                        className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all"
                      >
                        <Eye className="w-5 h-5 text-slate-300" />
                      </button>
                      {!intern.evaluated && (
                        <button
                          onClick={() => handleEvaluate(intern)}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                          Evaluar
                        </button>
                      )}
                    </div>
                  </div>

                  {intern.evaluated && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Competencias</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <RadarChart data={Object.entries(intern.skills).map(([key, value]) => ({
                            skill: key.replace(/([A-Z])/g, ' $1').trim(),
                            value
                          }))}>
                            <PolarGrid stroke="#334155" />
                            <PolarAngleAxis dataKey="skill" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                            <PolarRadiusAxis stroke="#94a3b8" />
                            <Radar dataKey="value" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300 text-sm">Calificación General</span>
                            <span className="text-2xl font-bold text-purple-400">{intern.overallScore}/100</span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              style={{ width: `${intern.overallScore}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {Object.entries(intern.skills).slice(0, 3).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between text-sm">
                              <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="text-white font-semibold">{value}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Institutions Tab */}
        {activeTab === 'institutions' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Instituciones Registradas</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.institutions.map((inst) => (
                <div key={inst.id} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{inst.name}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Estudiantes:</span>
                      <span className="text-white font-semibold">{inst.students.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-sm block mb-2">Programas:</span>
                      <div className="flex flex-wrap gap-2">
                        {inst.programs.map((prog, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Market Tab */}
        {activeTab === 'market' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Análisis de Mercado</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Demanda Total</h3>
                <p className="text-4xl font-bold text-purple-400 mb-2">160</p>
                <p className="text-slate-400 text-sm">Posiciones abiertas</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Crecimiento</h3>
                <p className="text-4xl font-bold text-green-400 mb-2">+18%</p>
                <p className="text-slate-400 text-sm">vs mes anterior</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">Competencia</h3>
                <p className="text-4xl font-bold text-orange-400 mb-2">Alta</p>
                <p className="text-slate-400 text-sm">Nivel del mercado</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-6">Habilidades Más Buscadas</h3>
              <div className="space-y-4">
                {mockData.topSkills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{skill.value}%</span>
                        <span className={`text-xs ${skill.trend === 'up' ? 'text-green-400' : 'text-slate-400'}`}>
                          {skill.trend === 'up' ? '↑' : '→'}
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Evaluation Modal */}
      {showEvaluationModal && selectedIntern && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full border border-slate-700 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Evaluar Practicante</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-2">{selectedIntern.name}</h4>
              <p className="text-slate-400">{selectedIntern.program}</p>
            </div>

            <div className="space-y-4 mb-6">
              {['Competencias Técnicas', 'Habilidades Blandas', 'Resolución de Problemas', 'Trabajo en Equipo', 'Comunicación', 'Adaptabilidad'].map((skill) => (
                <div key={skill}>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">{skill}</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="75"
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-300 mb-2">Comentarios</label>
              <textarea
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 resize-none"
                rows="4"
                placeholder="Escribe tus comentarios sobre el desempeño del practicante..."
              ></textarea>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowEvaluationModal(false)}
                className="flex-1 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => setShowEvaluationModal(false)}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Guardar Evaluación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}