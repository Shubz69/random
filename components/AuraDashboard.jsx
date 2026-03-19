export default function AuraDashboard() {
  return (
    <div className="aura-dash-wrap">
      <div className="aura-dash-shell">
        <div className="aura-dash-topbar">
          <div className="aura-brand">
            <div className="aura-brand-mark">A7</div>
            <div className="aura-brand-text">
              <span className="strong">AURA</span>
              <span>TERMINAL</span>
            </div>
          </div>

          <div className="aura-mini-chart">
            <svg viewBox="0 0 260 58" className="aura-mini-chart-svg">
              <path
                d="M0 40 L12 30 L24 38 L36 22 L48 28 L60 12 L72 34 L84 8 L96 18 L108 10 L120 22 L132 14 L144 36 L156 16 L168 20 L180 8 L192 12 L204 30 L216 18 L228 26 L240 14 L260 16"
                fill="none"
                stroke="rgba(69,221,255,0.95)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="aura-user-chip">
            <div className="aura-user-avatar" />
            <span>AURA 3358</span>
          </div>
        </div>

        <div className="aura-dash-main">
          <div className="aura-market-card">
            <div className="aura-market-head">
              <span>MARKETS</span>
              <span className="aura-market-icons">↗ ×</span>
            </div>

            <div className="aura-market-list">
              <MarketRow pair="EUR/USD" value="+0.23%" tone="up" />
              <MarketRow pair="GBP/USD" value="-0.12%" tone="down" />
              <MarketRow pair="USD/JPY" value="+0.54%" tone="up" />
              <MarketRow pair="BTC/USD" value="+1.21%" tone="up" />
              <MarketRow pair="ETH/USD" value="+0.88%" tone="up" />
            </div>

            <div className="aura-market-footer">
              <span>◈</span>
              <span>⬡</span>
              <span>◌</span>
            </div>
          </div>

          <div className="aura-chart-card">
            <div className="aura-chart-toolbar">
              <span>● Overview</span>
              <span>BTC/USD</span>
            </div>

            <div className="aura-chart-grid" />

            <div className="aura-chart-world" />

            <svg
              viewBox="0 0 900 470"
              className="aura-chart-svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="volGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(121,176,255,0.7)" />
                  <stop offset="100%" stopColor="rgba(121,176,255,0.08)" />
                </linearGradient>
              </defs>

              <path
                d="M20 290 C80 320,120 330,180 305 S290 230,350 250 S470 310,530 265 S650 175,710 210 S820 155,880 125"
                fill="none"
                stroke="rgba(234,165,84,0.85)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M20 315 C80 340,140 345,200 320 S320 260,390 275 S500 330,560 295 S675 205,730 235 S830 180,885 145"
                fill="none"
                stroke="rgba(196,120,65,0.55)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <g opacity="0.9">
                {Array.from({ length: 34 }).map((_, i) => {
                  const w = 16;
                  const gap = 8;
                  const x = 24 + i * (w + gap);
                  const heights = [
                    36, 42, 28, 48, 52, 46, 38, 58, 44, 62, 54, 70, 60, 50, 80,
                    66, 48, 56, 74, 68, 88, 78, 72, 98, 90, 84, 110, 118, 100,
                    122, 108, 96, 126, 116
                  ];
                  const h = heights[i];
                  return (
                    <rect
                      key={i}
                      x={x}
                      y={420 - h}
                      width={w}
                      height={h}
                      rx="2"
                      fill="url(#volGrad)"
                    />
                  );
                })}
              </g>

              <g>
                {candles.map((c, i) => (
                  <g key={i}>
                    <line
                      x1={c.x}
                      y1={c.high}
                      x2={c.x}
                      y2={c.low}
                      stroke={c.up ? "rgba(111,240,214,0.95)" : "rgba(247,171,113,0.95)"}
                      strokeWidth="2"
                    />
                    <rect
                      x={c.x - 7}
                      y={Math.min(c.open, c.close)}
                      width={14}
                      height={Math.max(8, Math.abs(c.close - c.open))}
                      rx="2"
                      fill={c.up ? "rgba(111,240,214,0.95)" : "rgba(247,171,113,0.95)"}
                    />
                  </g>
                ))}
              </g>
            </svg>

            <div className="aura-axis-labels">
              <span>3.01</span>
              <span>2.93</span>
              <span>2.85</span>
              <span>2.77</span>
              <span>2.69</span>
            </div>
          </div>
        </div>

        <div className="aura-stats">
          <StatCard label="PROFIT" value="+12.48%" accent="blue" />
          <StatCard label="RISK" value="2.7%" accent="gold" />
          <StatCard label="WIN RATE" value="78.3%" accent="cyan" />
          <StatCard label="STREAK" value="12 DAYS" accent="gold" />
        </div>
      </div>
    </div>
  );
}

function MarketRow({ pair, value, tone }) {
  return (
    <div className="aura-market-row">
      <div className="aura-market-left">
        <span className={`aura-dot ${tone}`} />
        <span>{pair}</span>
      </div>
      <span className={`aura-market-value ${tone}`}>{value}</span>
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div className="aura-stat-card">
      <div className="aura-stat-label">{label}</div>
      <div className="aura-stat-value">{value}</div>
      <div className={`aura-stat-spark ${accent}`} />
    </div>
  );
}

const candles = [
  { x: 40, open: 280, close: 315, high: 258, low: 336, up: false },
  { x: 66, open: 310, close: 292, high: 276, low: 332, up: true },
  { x: 92, open: 302, close: 328, high: 286, low: 346, up: false },
  { x: 118, open: 334, close: 312, high: 298, low: 356, up: true },
  { x: 144, open: 320, close: 286, high: 270, low: 344, up: true },
  { x: 170, open: 286, close: 300, high: 258, low: 318, up: false },
  { x: 196, open: 298, close: 280, high: 252, low: 322, up: true },
  { x: 222, open: 282, close: 255, high: 238, low: 306, up: true },
  { x: 248, open: 258, close: 276, high: 232, low: 292, up: false },
  { x: 274, open: 278, close: 296, high: 252, low: 314, up: false },
  { x: 300, open: 294, close: 274, high: 260, low: 324, up: true },
  { x: 326, open: 272, close: 288, high: 246, low: 302, up: false },
  { x: 352, open: 290, close: 326, high: 268, low: 344, up: false },
  { x: 378, open: 324, close: 300, high: 286, low: 340, up: true },
  { x: 404, open: 298, close: 318, high: 270, low: 334, up: false },
  { x: 430, open: 316, close: 346, high: 288, low: 360, up: false },
  { x: 456, open: 348, close: 320, high: 304, low: 366, up: true },
  { x: 482, open: 322, close: 292, high: 278, low: 344, up: true },
  { x: 508, open: 294, close: 310, high: 268, low: 328, up: false },
  { x: 534, open: 308, close: 338, high: 288, low: 356, up: false },
  { x: 560, open: 340, close: 378, high: 318, low: 396, up: false },
  { x: 586, open: 380, close: 350, high: 334, low: 402, up: true },
  { x: 612, open: 352, close: 334, high: 316, low: 374, up: true },
  { x: 638, open: 338, close: 360, high: 320, low: 382, up: false },
  { x: 664, open: 362, close: 390, high: 338, low: 406, up: false },
  { x: 690, open: 392, close: 428, high: 360, low: 446, up: false },
  { x: 716, open: 430, close: 398, high: 384, low: 448, up: true },
  { x: 742, open: 400, close: 372, high: 356, low: 420, up: true },
  { x: 768, open: 374, close: 408, high: 352, low: 422, up: false },
  { x: 794, open: 410, close: 446, high: 384, low: 462, up: false },
  { x: 820, open: 448, close: 422, high: 404, low: 470, up: true },
  { x: 846, open: 424, close: 452, high: 406, low: 468, up: false }
];
