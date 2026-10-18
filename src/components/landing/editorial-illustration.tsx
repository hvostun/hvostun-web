/**
 * Рисованная editorial-сцена: собака у окна среди комнатных растений.
 * Наивная неровная линия, несколько заполненных пятен в брендовых цветах.
 * Полностью декоративна.
 */

export function EditorialIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 300"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* мягкое пятно света из окна */}
      <path
        d="M52 214 C86 196 168 194 214 212 C204 240 168 252 128 252 C88 252 60 238 52 214 Z"
        fill="var(--color-tint-blue)"
        opacity="0.75"
      />

      {/* окно */}
      <g stroke="var(--color-primary)" strokeWidth="2.6">
        <path d="M60 26 C104 20 164 21 206 27 C210 76 210 138 205 188 C162 194 104 195 61 188 C56 138 56 76 60 26 Z" />
        <path d="M133 24 C134 78 134 138 133 191" />
        <path d="M58 106 C104 101 162 101 208 106" />
      </g>
      {/* небо и солнце в окне */}
      <path
        d="M66 32 C106 27 160 28 200 33 C202 62 202 82 200 100 C160 96 106 96 66 100 C64 78 64 54 66 32 Z"
        fill="var(--color-blue)"
        opacity="0.35"
      />
      <circle cx="176" cy="58" r="14" fill="var(--color-sand)" opacity="0.85" />
      <path
        d="M74 92 C88 74 100 72 112 88 C120 76 132 76 142 92"
        stroke="var(--color-primary)"
        strokeWidth="2.2"
        opacity="0.5"
      />

      {/* подоконник */}
      <path
        d="M44 194 C104 186 168 186 222 194"
        stroke="var(--color-primary)"
        strokeWidth="3"
      />

      {/* растение слева в горшке */}
      <g stroke="var(--color-accent)" strokeWidth="2.4">
        <path d="M78 186 C74 166 70 148 62 134" />
        <path d="M78 186 C82 164 90 148 102 136" />
        <path d="M62 134 C48 130 42 140 46 150 C54 156 62 148 62 134 Z" fill="var(--color-accent)" fillOpacity="0.18" />
        <path d="M102 136 C114 128 124 136 120 148 C110 154 102 148 102 136 Z" fill="var(--color-accent)" fillOpacity="0.18" />
        <path d="M78 186 C77 170 79 156 84 146" />
      </g>
      <path
        d="M64 186 C78 183 94 183 106 186 C104 200 100 208 85 208 C70 208 66 199 64 186 Z"
        fill="var(--color-coral)"
        fillOpacity="0.5"
        stroke="var(--color-primary)"
        strokeWidth="2.2"
      />

      {/* собака у окна */}
      <g stroke="var(--color-primary)" strokeWidth="2.8">
        <path
          d="M150 250 C142 236 142 216 152 204 C160 194 176 190 190 196 C200 200 206 210 208 222 C226 224 236 232 238 244 C240 254 232 258 220 258 C196 260 170 260 152 258 C146 256 148 252 150 250 Z"
          fill="var(--color-accent)"
          fillOpacity="0.16"
        />
        <path d="M186 198 C182 186 186 176 194 172 C202 168 212 172 214 182 C216 192 210 198 202 200" />
        <path d="M196 176 C192 166 194 158 200 156" />
        <circle cx="200" cy="184" r="2.4" fill="var(--color-primary)" />
        <path d="M212 190 C216 192 220 192 224 190" />
        <path d="M238 244 C248 240 252 232 250 224" />
      </g>

      {/* трава / тень под сценой */}
      <path
        d="M36 268 C74 260 176 258 236 266"
        stroke="var(--color-accent)"
        strokeWidth="2.4"
        opacity="0.6"
      />
      <g stroke="var(--color-accent)" strokeWidth="2" opacity="0.55">
        <path d="M52 266 C50 258 52 252 56 248" />
        <path d="M64 267 C66 259 70 254 74 251" />
        <path d="M240 266 C244 258 246 252 245 246" />
      </g>
    </svg>
  );
}
