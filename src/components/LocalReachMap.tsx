import React, { useState } from 'react';
import { MapPin, Navigation, Car, Bus, Compass, Shield, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { PRACTICE_INFO } from '../data/counsellingData';

interface CatchmentNode {
  id: string;
  name: string;
  shortName: string;
  x: number; // percentage in SVG viewBox 0-500
  y: number; // percentage in SVG viewBox 0-380
  travelTime: string;
  distance: string;
  transit: string;
  notes: string;
  isMainHub?: boolean;
}

const NODES: CatchmentNode[] = [
  {
    id: 'oadby',
    name: 'Oadby (Talk Aid Consulting Room)',
    shortName: 'Oadby',
    x: 270,
    y: 200,
    travelTime: 'Practice Location',
    distance: '0 miles',
    transit: 'Highcroft Ave (LE2 5UH)',
    notes: 'Private, quiet therapy room with free on-street parking directly outside.',
    isMainHub: true
  },
  {
    id: 'leicester-centre',
    name: 'Leicester City Centre',
    shortName: 'City Centre',
    x: 160,
    y: 90,
    travelTime: '12-14 mins',
    distance: '3.6 miles',
    transit: 'Direct A6 London Rd / Arriva 31 & 31A',
    notes: 'Direct transit from Leicester Railway Station and Clock Tower.'
  },
  {
    id: 'knighton',
    name: 'Knighton & Stoneygate',
    shortName: 'Knighton',
    x: 215,
    y: 145,
    travelTime: '5 mins',
    distance: '1.7 miles',
    transit: 'Via A6 / Church Lane',
    notes: 'Adjacent residential neighborhood; quick 5-min drive.'
  },
  {
    id: 'evington',
    name: 'Evington',
    shortName: 'Evington',
    x: 310,
    y: 115,
    travelTime: '7 mins',
    distance: '2.4 miles',
    transit: 'Via Gartree Road / Shady Lane',
    notes: 'Easy cross-town transit avoiding city center congestion.'
  },
  {
    id: 'stoughton',
    name: 'Stoughton & Thurnby',
    shortName: 'Stoughton',
    x: 390,
    y: 160,
    travelTime: '6 mins',
    distance: '2.1 miles',
    transit: 'Via Gartree Road',
    notes: 'Semi-rural access with straightforward country road parking approach.'
  },
  {
    id: 'great-glen',
    name: 'Great Glen & Kibworth',
    shortName: 'Great Glen',
    x: 385,
    y: 280,
    travelTime: '8 mins',
    distance: '3.8 miles',
    transit: 'Direct A6 south bypass',
    notes: 'Fast dual carriageway access from South East Leicestershire.'
  },
  {
    id: 'wigston',
    name: 'Wigston & South Wigston',
    shortName: 'Wigston',
    x: 170,
    y: 245,
    travelTime: '6 mins',
    distance: '2.2 miles',
    transit: 'Via B582 / Bull Head St',
    notes: 'Direct east-west route into central Oadby.'
  },
  {
    id: 'blaby',
    name: 'Blaby & Countesthorpe',
    shortName: 'Blaby',
    x: 110,
    y: 310,
    travelTime: '12 mins',
    distance: '4.8 miles',
    transit: 'Via B582 & A426',
    notes: 'Smooth bypass commute with zero city traffic.'
  }
];

export const LocalReachMap: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('oadby');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeNode = NODES.find(n => n.id === (hoveredNodeId || selectedNodeId)) || NODES[0];
  const mainHub = NODES[0];

  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs">
      {/* Map Control Header */}
      <div className="p-4 sm:px-6 bg-stone-50/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
            South Leicestershire Reach & Transit Map
          </span>
        </div>
        <div className="text-[11px] text-stone-500 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-stone-400" />
          <span>Interactive · Tap any area to view transit details</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Stylized Map Graphic (SVG) */}
        <div className="lg:col-span-7 relative bg-stone-100/70 rounded-2xl border border-stone-200/90 p-2 sm:p-4 overflow-hidden select-none">
          {/* Subtle Grid / Topography background texture */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          <svg
            viewBox="0 0 500 380"
            className="w-full h-auto max-h-[340px] drop-shadow-2xs overflow-visible"
            role="img"
            aria-label="Map showing Talk Aid Counselling in Oadby and surrounding Leicestershire areas"
          >
            <defs>
              {/* Radial gradient for the main Oadby zone */}
              <radialGradient id="oadbyGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#065f46" stopOpacity="0" />
              </radialGradient>

              {/* Gradient for connecting route lines */}
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>

            {/* Stylized background district contour patches */}
            <path
              d="M 120,60 Q 200,40 270,70 T 420,130 Q 440,240 370,320 T 170,340 Q 80,260 90,160 Z"
              fill="#f5f5f4"
              stroke="#e7e5e4"
              strokeWidth="1.5"
            />

            {/* Arterial Corridor: A6 London Road corridor across Leicester through Oadby into Great Glen */}
            <path
              d="M 140,50 L 200,120 L 270,200 L 360,260 L 420,310"
              fill="none"
              stroke="#d6d3d1"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* A6 Road Label */}
            <text x="210" y="140" fill="#a8a29e" fontSize="9" fontWeight="600" letterSpacing="0.5">
              A6 LONDON RD
            </text>

            {/* Ring Road: A563 Palmerston Way Outer Ring */}
            <path
              d="M 110,130 Q 220,160 350,110"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="3.5"
              strokeDasharray="4 3"
            />
            <text x="280" y="152" fill="#94a3b8" fontSize="8" fontWeight="500">
              A563 RING RD
            </text>

            {/* B582 Road corridor between Wigston & Oadby */}
            <path
              d="M 170,245 L 270,200 L 390,160"
              fill="none"
              stroke="#e7e5e4"
              strokeWidth="3"
            />

            {/* Connecting transit paths from Oadby (main hub) to each node */}
            {NODES.filter(n => !n.isMainHub).map(node => {
              const isHighlighted = (activeNode.id === node.id);
              return (
                <g key={`path-${node.id}`}>
                  <line
                    x1={mainHub.x}
                    y1={mainHub.y}
                    x2={node.x}
                    y2={node.y}
                    stroke={isHighlighted ? '#047857' : '#cbd5e1'}
                    strokeWidth={isHighlighted ? '2.5' : '1.2'}
                    strokeDasharray={isHighlighted ? 'none' : '3 3'}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  {isHighlighted && (
                    <circle
                      cx={(mainHub.x + node.x) / 2}
                      cy={(mainHub.y + node.y) / 2}
                      r="3"
                      fill="#047857"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* Glow halo around Oadby main practice location */}
            <circle
              cx={mainHub.x}
              cy={mainHub.y}
              r="48"
              fill="url(#oadbyGlow)"
              className="animate-pulse"
            />
            <circle
              cx={mainHub.x}
              cy={mainHub.y}
              r="24"
              fill="#ecfdf5"
              stroke="#059669"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />

            {/* Catchment Nodes */}
            {NODES.map(node => {
              const isSelected = activeNode.id === node.id;
              const isMain = !!node.isMainHub;

              return (
                <g
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className="cursor-pointer group"
                >
                  {/* Invisible wider target for comfortable click/hover */}
                  <circle cx={node.x} cy={node.y} r="20" fill="transparent" />

                  {isMain ? (
                    /* Main Hub Pin (Oadby) */
                    <g>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="11"
                        fill="#065f46"
                        stroke="#ffffff"
                        strokeWidth="3"
                        className="drop-shadow-md"
                      />
                      <circle cx={node.x} cy={node.y} r="4" fill="#34d399" />
                      
                      {/* Badge Callout */}
                      <rect
                        x={node.x - 52}
                        y={node.y - 34}
                        width="104"
                        height="20"
                        rx="10"
                        fill="#064e3b"
                        className="drop-shadow-md"
                      />
                      <text
                        x={node.x}
                        y={node.y - 21}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="9.5"
                        fontWeight="700"
                        fontFamily="inherit"
                      >
                        Talk Aid Practice (LE2)
                      </text>
                    </g>
                  ) : (
                    /* Satellite town node */
                    <g>
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={isSelected ? '8' : '6'}
                        fill={isSelected ? '#047857' : '#ffffff'}
                        stroke={isSelected ? '#ffffff' : '#64748b'}
                        strokeWidth={isSelected ? '2.5' : '2'}
                        className="transition-all duration-200 drop-shadow-2xs"
                      />
                      <text
                        x={node.x}
                        y={node.y + 16}
                        textAnchor="middle"
                        fill={isSelected ? '#0f172a' : '#475569'}
                        fontSize="9.5"
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="inherit"
                        className="transition-all duration-200"
                      >
                        {node.shortName}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Compass Indicator */}
            <g transform="translate(450, 40)">
              <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
              <text x="0" y="-4" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="bold">N</text>
              <line x1="0" y1="-10" x2="0" y2="10" stroke="#047857" strokeWidth="1" />
              <line x1="-10" y1="0" x2="10" y2="0" stroke="#cbd5e1" strokeWidth="1" />
            </g>
          </svg>

          {/* Quick interactive hint below SVG */}
          <div className="mt-2 text-center text-[11px] text-stone-500 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-800 shrink-0" />
            <span>Center Node: 19 Highcroft Avenue, Oadby</span>
            <span className="text-stone-300">·</span>
            <span>Free On-Street Parking</span>
          </div>
        </div>

        {/* Selected Area Proximity Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-stone-200">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Catchment Detail
              </span>
              <span className="text-xs font-semibold text-stone-500">
                {activeNode.distance} from practice
              </span>
            </div>

            <h4 className="text-base font-bold text-stone-900 font-serif-display mb-1">
              {activeNode.name}
            </h4>
            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              {activeNode.notes}
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-200/70 text-xs text-stone-700">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Car className="w-3.5 h-3.5 text-emerald-700" /> Drive Time:
                </span>
                <span className="font-bold text-stone-900">{activeNode.travelTime}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Bus className="w-3.5 h-3.5 text-emerald-700" /> Transit Route:
                </span>
                <span className="font-medium text-stone-800 text-right max-w-[190px] truncate">
                  {activeNode.transit}
                </span>
              </div>
            </div>
          </div>

          {/* Quick catchment zone pills to click */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
              Select Your Local Area:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {NODES.map(node => (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`text-xs py-1 px-2.5 rounded-lg border transition-all cursor-pointer ${
                    activeNode.id === node.id
                      ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-2xs'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  {node.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Discreet accessibility reassurance */}
          <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-2.5 text-xs text-stone-700">
            <Shield className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Discreet Access:</strong> Our room is situated in a tranquil residential setting without large clinic signage, ensuring total privacy when you arrive and depart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
