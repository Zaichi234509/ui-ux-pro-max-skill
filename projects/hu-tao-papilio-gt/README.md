# 🦋 PAPILIO GT-77 — Hu Tao × Wangsheng Speedworks

**Premium AAA 3D Website** | *Fan-Made Hypercar Collaboration Concept*

> One life. One lap. The 77th Director of the Wangsheng Funeral Parlor lends her
> name (and her butterflies) to a **spirit-flame V12 hypercar limited to 77 units**.
>
> Skill stack learned from [`freshtechbro/claudedesignskills`](https://github.com/freshtechbro/claudedesignskills)
> — `modern-web-design` · `threejs-webgl` · `gsap-scrolltrigger` principles:
> performance-first GPU animation, bold-minimal typography, scrollytelling,
> cursor UX, micro-interactions, and layered depth.

---

## 🌐 Run It

No build step. Just open `index.html` in a modern browser.

```bash
# or serve locally (recommended)
python3 -m http.server 8080
# → http://localhost:8080
```

An internet connection is required once (Google Fonts + Three.js / GSAP CDNs).

---

## ✨ Feature Checklist

| Requested | Where it lives |
|---|---|
| 🌀 **Loading animation** | Butterfly-crest SVG stroke-draw, live % counter (real asset preloading), twin-curtain reveal |
| 🧊 **3D effects** | Procedural Three.js hypercar (clearcoat paint, glass canopy, butterfly taillight, underglow), UnrealBloom post-processing, shader-driven ember field, instanced spirit butterflies, live Livery Atelier (2nd WebGL scene) |
| 🚪 **Entrance animation** | GSAP master timeline — curtain lift, camera dolly-in, per-character title stagger, chip cascade, back-out ignition button |
| 🖱️ **Mouse animation** | Custom dot+ring cursor with contextual modes (VIEW / DRAG / link), ember trail particles, camera parallax, magnetic buttons, pointer-glare tilt cards |
| 🌌 **Background animations** | Full-screen floating ember canvas (screen blend), sweeping rim spotlights, pulsing stage ring, drifting butterfly swarms, infinite marquee |
| 👆 **Hover effects** | 3D tilt cards with glare + translateZ layers, link underlines, marquee pause, swatch slide, giant footer outline glow, image zoom/saturation |
| ⚙️ **Micro-interactions** | **IGN button** — WebAudio-synthesized V12 ignition with rev sequence, RPM/gear HUD (N → 壹…陆), screen shake, exhaust flame sprites, wheel spin, butterfly frenzy; button ripples + ember bursts; email validation shake → gold success morph |

## 🗺️ Page Flow

1. **Hero** — live 3D turntable of the GT-77 (drag to spin), split-type headline, spec chips
2. **Marquee** — spec ticker (pauses on hover)
3. **01 / Design** — three tilt-card principles (Butterfly Aero · Spirit-Flame V12 · Plum Forge)
4. **02 / Specs** — sticky media column, animated counters, gradient spec bars
5. **Night Gallery** — pinned horizontal scrollytelling with parallax frames + progress meter
6. **03 / Livery Atelier** — live 3D paint configurator (4 midnight lacquers; also repaints the hero car)
7. **Director's Quote** — parallax portrait with brush-calligraphy seal 「蝶」
8. **Reserve** — build-slot form with ghost-courier success state
9. **Footer** — outline mega-type, fan-concept disclaimer

## 🎨 Generated Assets (`assets/`)

All imagery was AI-generated for this concept:

- `hero.jpg` — Director Hu Tao leaning on the GT-77, neon street
- `car-side.jpg` — studio profile, Crimson Crossing livery
- `car-rear.jpg` — butterfly-wing taillight signature
- `car-interior.jpg` — ghost-grade cockpit, holographic butterfly HUD
- `gallery-drift.jpg` — Wuwang Hill hairpin, embers & spirit flames
- `gallery-city.jpg` — rain-soaked Liyue alley
- `hutao-portrait.jpg` — the Director with Boo Tao, plum petals

## 🛠️ Tech

Three.js r128 (+ EffectComposer / UnrealBloomPass) · GSAP 3 + ScrollTrigger ·
Web Audio API · Vanilla JS/CSS · Playfair Display / Space Grotesk / Inter / Ma Shan Zheng

Accessibility & performance: `prefers-reduced-motion` fallbacks, DPR cap (1.75),
IntersectionObserver-paused render loops, GPU-only transforms, touch-device
cursor graceful degradation.

---

*Fan-made concept. Not affiliated with, sponsored, or endorsed by HoYoverse / COGNOSPHERE.*
*Warranty void if driven through the border between worlds more than twice.* 🦋
