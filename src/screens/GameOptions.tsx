// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Check, Circle, CircleUserRound, Play, Save, Settings } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "button-3-3" | "start-session-4" | "01-5" | "05-6" | "10-7" | "15-8" | "cancel-9" | "save-changes-10";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-container-padding h-14 z-50">
      <div className="font-hud-label text-hud-label font-bold tracking-tighter text-primary dark:text-primary uppercase">
                  Tetris Supervisor Root Fix 0513f
              </div>
      <div className="flex items-center gap-4 hidden">
      {/* Search bar is hidden per JSON */}
      </div>
      <div className="flex items-center gap-4">
      <button className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 active:scale-95 transition-colors duration-100 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 active:scale-95 transition-colors duration-100 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 active:scale-95 transition-colors duration-100 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-surface-container dark:bg-surface-container text-primary dark:text-primary docked h-full left-0 w-64 border-r border-outline-variant flat no shadows fixed left-0 top-0 h-full flex-col z-40 pt-14">
      <div className="p-6 border-b border-outline-variant mb-4 flex items-center gap-4">
      <div className="w-12 h-12 bg-surface-container-highest rounded-none flex items-center justify-center border border-outline-variant">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-hud-label text-hud-label text-primary font-bold uppercase">Root Admin</h2>
      <p className="font-hud-label text-hud-label text-on-surface-variant opacity-70">V0513F-PRO</p>
      </div>
      </div>
      <div className="px-4 mb-6">
      <button className="w-full arcade-button font-button-text text-button-text py-3 uppercase flex items-center justify-center gap-2" type="button" data-action-id="start-session-4" onClick={actions?.["start-session-4"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                          START_SESSION
                      </button>
      </div>
      <div className="flex-1 overflow-y-auto font-hud-label text-hud-label">
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 hover:bg-surface-container-highest transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Terminal
                      </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 hover:bg-surface-container-highest transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Performance
                      </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 hover:bg-surface-container-highest transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Input Mapping
                      </a>
      <a className="flex items-center gap-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary px-4 py-3 hover:bg-surface-container-highest transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          System
                      </a>
      </div>
      <div className="mt-auto border-t border-outline-variant font-hud-label text-hud-label">
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-4 hover:bg-surface-container-highest transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle className="text-error" aria-hidden={true} focusable="false" />
                          Shutdown
                      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 p-container-padding overflow-y-auto">
      <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex items-end justify-between border-b border-outline-variant pb-4">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">System Configuration</h1>
      <p className="font-hud-label text-hud-label text-on-surface-variant mt-2">Adjust environment parameters.</p>
      </div>
      </div>
      {/* Bento Grid Layout for Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-grid-gutter">
      {/* Audio Settings Panel */}
      <div className="hud-container p-6 flex flex-col gap-6">
      <div className="border-b border-outline-variant pb-3 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Audio Subsystem
                                  </h2>
      </div>
      <div className="space-y-6">
      {/* Volume Slider */}
      <div>
      <label className="font-hud-label text-hud-label text-on-surface-variant mb-4 block uppercase flex justify-between">
      <span>Master Gain</span>
      <span className="text-primary">80%</span>
      </label>
      <input className="arcade-range" max="100" min="0" type="range" value="80" />
      </div>
      {/* Toggles */}
      <div className="space-y-4">
      <label className="arcade-toggle-label">
      <input checked={true} className="arcade-toggle-input" type="checkbox" />
      <div className="arcade-toggle-box">
      <Check className="arcade-toggle-icon text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-hud-label text-hud-label text-on-surface uppercase">Telemetry SFX</span>
      </label>
      <label className="arcade-toggle-label">
      <input checked={true} className="arcade-toggle-input" type="checkbox" />
      <div className="arcade-toggle-box">
      <Check className="arcade-toggle-icon text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-hud-label text-hud-label text-on-surface uppercase">Background Sequence</span>
      </label>
      </div>
      </div>
      </div>
      {/* Gameplay Settings Panel */}
      <div className="hud-container p-6 flex flex-col gap-6">
      <div className="border-b border-outline-variant pb-3 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Rendering &amp; Mechanics
                                  </h2>
      </div>
      <div className="space-y-6">
      {/* Toggles */}
      <div className="space-y-4">
      <label className="arcade-toggle-label">
      <input checked={true} className="arcade-toggle-input" type="checkbox" />
      <div className="arcade-toggle-box">
      <Check className="arcade-toggle-icon text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-hud-label text-hud-label text-on-surface uppercase">Projection (Ghost Piece)</span>
      </label>
      <label className="arcade-toggle-label">
      <input className="arcade-toggle-input" type="checkbox" />
      <div className="arcade-toggle-box">
      <Check className="arcade-toggle-icon text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-hud-label text-hud-label text-on-surface uppercase">Matrix Overlay (Grid Lines)</span>
      </label>
      </div>
      {/* Level Select (Select substitute using arcade aesthetic) */}
      <div className="pt-2">
      <label className="font-hud-label text-hud-label text-on-surface-variant mb-2 block uppercase">Initial State (Level)</label>
      <div className="flex flex-wrap gap-2">
      <button className="arcade-button active font-hud-label text-hud-label w-10 h-10 flex items-center justify-center" type="button" data-action-id="01-5" onClick={actions?.["01-5"]}>01</button>
      <button className="arcade-button font-hud-label text-hud-label w-10 h-10 flex items-center justify-center" type="button" data-action-id="05-6" onClick={actions?.["05-6"]}>05</button>
      <button className="arcade-button font-hud-label text-hud-label w-10 h-10 flex items-center justify-center" type="button" data-action-id="10-7" onClick={actions?.["10-7"]}>10</button>
      <button className="arcade-button font-hud-label text-hud-label w-10 h-10 flex items-center justify-center" type="button" data-action-id="15-8" onClick={actions?.["15-8"]}>15</button>
      </div>
      </div>
      </div>
      </div>
      {/* Controls Settings Panel (Spans full width on desktop) */}
      <div className="hud-container p-6 flex flex-col gap-6 lg:col-span-2">
      <div className="border-b border-outline-variant pb-3 mb-2">
      <h2 className="font-hud-label text-hud-label text-primary uppercase flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Input Calibration
                                  </h2>
      </div>
      <div className="max-w-md">
      {/* Sensitivity Slider */}
      <div>
      <label className="font-hud-label text-hud-label text-on-surface-variant mb-4 block uppercase flex justify-between">
      <span>DAS (Delayed Auto Shift) Delay</span>
      <span className="text-primary">133ms</span>
      </label>
      <input className="arcade-range" max="300" min="50" type="range" value="133" />
      </div>
      </div>
      </div>
      </div>
      {/* Action Bar */}
      <div className="mt-8 pt-6 border-t border-outline-variant flex flex-col sm:flex-row justify-end gap-4">
      <button className="arcade-button font-button-text text-button-text px-8 py-3 uppercase min-h-touch-target-min" type="button" data-action-id="cancel-9" onClick={actions?.["cancel-9"]}>
                              CANCEL
                          </button>
      <button className="arcade-button active font-button-text text-button-text px-8 py-3 uppercase min-h-touch-target-min flex items-center justify-center gap-2" type="button" data-action-id="save-changes-10" onClick={actions?.["save-changes-10"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              SAVE CHANGES
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
