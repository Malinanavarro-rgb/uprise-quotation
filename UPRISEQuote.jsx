import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react';

export default function UPRISEQuote() {
  React.useEffect(() => {
    document.title = 'UPRISE - Cotización UPR-ACC-0626-01';
  }, []);

  const [currency, setCurrency] = useState('MXN');
  const [language, setLanguage] = useState('es');
  const [expandedItems, setExpandedItems] = useState(false);

  const exchangeRate = 17.5;

  const items = [
    { code: '2617100', desc: 'VERTICAL C/E LW 1.00M', qty: 6, price_mxn: 5280 },
    { code: '2617200', desc: 'VERTICAL C/E LW 2.00M', qty: 12, price_mxn: 17310 },
    { code: '2617300', desc: 'VERTICAL C/E LW 3.00M', qty: 4, price_mxn: 8510 },
    { code: '2601073', desc: 'HORIZONTAL LW "O" 0.73M', qty: 12, price_mxn: 7620 },
    { code: '2601257', desc: 'HORIZONTAL LW "O" 2.57M', qty: 38, price_mxn: 47025 },
    { code: '2672257', desc: 'VIGA PUENTE "O" LW 2.57M', qty: 2, price_mxn: 5400 },
    { code: '2683257', desc: 'DIAGONAL LW 2.57M X 2.00M', qty: 16, price_mxn: 23640 },
    { code: '3862257', desc: 'PLATAFORMA ACERO 2.57M X 0.32M', qty: 7, price_mxn: 18095 },
    { code: '3863257', desc: 'PLATAFORMA ACERO 2.57M X 0.19M', qty: 1, price_mxn: 2277.50 },
    { code: '3872257', desc: 'PLAT. ROBUST CON TRAMPILLA 2.57M', qty: 4, price_mxn: 32540 },
  ];

  const subtotalMXN = 199866.25;
  const ivaMXN = 31978.60;
  const totalMXN = 231844.85;
  
  const subtotalUSD = subtotalMXN / exchangeRate;
  const ivaUSD = ivaMXN / exchangeRate;
  const totalUSD = totalMXN / exchangeRate;

  const texts = {
    es: {
      quote: 'Cotización Comercial',
      client: 'Cliente',
      company: 'Contacto',
      equipment: 'Sistema Modular para Trabajo en Altura',
      reference: 'Torre 2.57 × 2.57 × 8.00 m',
      components: 'Componentes',
      includes: 'Incluye',
      excludes: 'No Incluye',
      notes: 'Notas Importantes',
      subtotal: 'Subtotal',
      iva: 'IVA 16%',
      total: 'Total',
      warranty: 'Validez de la cotización: 15 días naturales',
      disclaimer: 'Componentes configurados para trabajo en altura. Validación final sujeta a especificación técnica del proyecto. No incluye: instalación, montaje, desmontaje, maniobras de descarga, permisos, ni cálculo estructural firmado salvo contratación adicional.',
    },
    en: {
      quote: 'Commercial Quotation',
      client: 'Client',
      company: 'Contact',
      equipment: 'Modular System for Work at Height',
      reference: 'Tower 2.57 × 2.57 × 8.00 m',
      components: 'Components',
      includes: 'Includes',
      excludes: 'Does Not Include',
      notes: 'Important Notes',
      subtotal: 'Subtotal',
      iva: 'VAT 16%',
      total: 'Total',
      warranty: 'Quotation validity: 15 natural days',
      disclaimer: 'Components configured for work at height. Final validation subject to project technical specification. Does not include: installation, assembly, disassembly, loading/unloading, permits, or signed structural calculations unless contracted separately.',
    }
  };

  const isMXN = currency === 'MXN';

  const formatCurrency = (value) => {
    if (isMXN) {
      return `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    } else {
      return `$${(value / exchangeRate).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }
  };

  const t = texts[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-baseline gap-0">
                <span className="text-3xl sm:text-4xl font-black" style={{ color: '#5B21B6' }}>U</span>
                <span className="text-3xl sm:text-4xl font-black" style={{ color: '#12234A' }}>PRISE</span>
              </div>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-600 mt-1">ACCESS SYSTEM</p>
            </div>
            
            <div className="flex gap-2">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-3 py-2 text-xs sm:text-sm bg-slate-100 border border-slate-300 rounded font-medium text-slate-900 cursor-pointer">
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
              <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="px-3 py-2 text-xs sm:text-sm bg-slate-100 border border-slate-300 rounded font-medium text-slate-900 cursor-pointer">
                <option value="MXN">MXN</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Cotización</p>
              <p className="text-lg font-bold text-slate-900">UPR-ACC-0626-01</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Fecha</p>
              <p className="text-sm font-semibold text-slate-900">25/06/2026</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 font-medium mb-1">Vigencia</p>
              <p className="text-sm font-semibold text-slate-900">15 días</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">Cliente</p>
            <p className="text-xl font-bold text-slate-900">Ing. Gabriel</p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-3">{t.company}</p>
            <p className="font-bold text-slate-900 mb-3">UPRISE Access System</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-slate-500" />
                <a href="mailto:proyectos@uprise.com.mx" className="text-xs sm:text-sm text-slate-700 hover:text-slate-900">
                  proyectos@uprise.com.mx
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-slate-500" />
                <a href="tel:+528123208331" className="text-xs sm:text-sm text-slate-700 hover:text-slate-900">
                  +52 (81) 2320 8331
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300 p-6">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-purple-900">{t.subtotal}</span>
              <span className="text-2xl font-bold text-purple-900">
                {formatCurrency(isMXN ? subtotalMXN : subtotalUSD)} {currency}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex justify-between items-baseline">
              <span className="font-medium text-slate-600">{t.iva}</span>
              <span className="text-2xl font-bold text-slate-900">
                {formatCurrency(isMXN ? ivaMXN : ivaUSD)} {currency}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 text-white shadow-lg border-2 border-purple-600">
            <p className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: '#E5E7EB' }}>
              {t.total}
            </p>
            <p className="text-5xl sm:text-6xl font-black leading-tight">
              {formatCurrency(isMXN ? totalMXN : totalUSD)}
            </p>
            <p className="text-sm mt-4 font-medium" style={{ color: '#D1D5DB' }}>{currency}</p>
          </div>
        </div>

        <div className="text-center py-8 border-t border-slate-200">
          <p className="text-xs text-slate-600">UPRISE Access System | Monterrey, México</p>
          <p className="text-xs text-slate-500 mt-2">Cotización profesional - Rev. 1.0</p>
        </div>
      </div>
    </div>
  );
}UPRISEQuote.jsx
