'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyType: 'Transporte IMIV Intermedio',
    comuna: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-polo-blue font-bold tracking-wider text-xs uppercase mb-2 block font-mono">
            CONTACTO & PROPUESTAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            SOLICITA TU EVALUACIÓN O PROPUESTA TÉCNICA
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            ¿Quieres conocer en detalle nuestra forma de trabajar, revisar ejemplos de proyectos o solicitar una propuesta técnica y económica? Estamos disponibles para coordinar una reunión y analizar las particularidades de tu iniciativa.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Office (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card 1: Direct Channels */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-sm space-y-5">
              <div className="border-b border-gray-100 pb-3">
                <span className="text-xs text-polo-blue font-mono font-bold uppercase tracking-wider block">
                  CONTACTO DIRECTO
                </span>
                <h4 className="text-lg font-bold text-gray-900">
                  Fernando Rolleri
                </h4>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href="https://wa.me/56997728978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-polo-blue transition-colors group p-2 rounded-lg hover:bg-slate-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">TELÉFONO / WHATSAPP</span>
                    <span className="font-bold text-gray-900">+56 9 9772 8978</span>
                  </div>
                </a>

                <a
                  href="mailto:fernando.rolleri@polosuringenieria.cl"
                  className="flex items-center gap-3 text-gray-700 hover:text-polo-blue transition-colors group p-2 rounded-lg hover:bg-slate-50"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-polo-blue flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">CORREO ELECTRÓNICO</span>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm break-all">fernando.rolleri@polosuringenieria.cl</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-2 rounded-lg text-gray-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-polo-blue flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">COBERTURA</span>
                    <span className="font-bold text-gray-900">Trabajamos en todo Chile</span>
                    <span className="text-xs text-gray-500 block">Proyectos inmobiliarios, comerciales, industriales y de infraestructura.</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-lg text-gray-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-polo-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">DISPONIBILIDAD</span>
                    <span className="text-xs text-gray-700 font-medium">Respuesta rápida y coordinación de reuniones técnicas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Guarantee Badge */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex items-center gap-3.5 text-xs text-gray-700">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-gray-900 block font-mono">COMPROMISO TÉCNICO</span>
                <span className="text-gray-500">Claridad temprana de plazos y costos, sin sorpresas ni observaciones evitables.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100 font-mono text-xs text-gray-500">
                <span className="font-bold text-polo-blue flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>FORMULARIO DE CONTACTO</span>
                </span>
                <span>SEIM / MTT CHILE</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Hemos recibido los datos de tu proyecto. Un ingeniero de Polosur Ingeniería 2 se comunicará contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-polo-blue font-bold underline mt-4"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                      Nombre Completo / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Inmobiliaria Los Andes / Ing. Juan Pérez"
                      className="w-full bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@empresa.cl"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+56 9 8765 4321"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                        Tipo de Estudio Requerido
                      </label>
                      <select
                        value={formData.studyType}
                        onChange={(e) => setFormData({ ...formData, studyType: e.target.value })}
                        className="w-full max-w-full truncate bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors"
                      >
                        <option>Transporte IMIV Básico</option>
                        <option>Transporte IMIV Intermedio</option>
                        <option>Informe Vial Para DIA</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                        Comuna / Región
                      </label>
                      <input
                        type="text"
                        value={formData.comuna}
                        onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                        placeholder="Ej: Las Condes, Santiago"
                        className="w-full bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-1 uppercase tracking-wider">
                      Detalles del Proyecto / Superficie m²
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Uso de suelo /Clase/Proyecto (Ref. Art, 1.2.3 DecretoNº30)."
                      className="w-full bg-slate-50 border border-gray-200 focus:border-polo-blue focus:bg-white text-gray-900 p-3 rounded-lg outline-none transition-colors placeholder:text-gray-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-polo-blue hover:bg-polo-blue-dark text-white font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-blue-500/25 transition-all text-xs active:scale-98"
                  >
                    <span>ENVIAR SOLICITUD DE COTIZACIÓN</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
