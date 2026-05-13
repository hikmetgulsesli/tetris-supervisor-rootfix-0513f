// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "options-2" | "controls-3" | "quit-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Ambient Glow / Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background pointer-events-none z-0"></div>
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-container-padding">
      {/* Header / Brand Area */}
      <div className="mb-12 text-center flex flex-col items-center gap-2">
      {/* Glitch / Offset Text Effect container */}
      <div className="relative inline-block">
      <h1 className="font-display-score text-display-score text-on-surface uppercase tracking-tighter drop-shadow-[0_0_8px_rgba(190,198,224,0.3)]">
                          TETRIS SUPERVISOR
                      </h1>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-outline-variant rounded bg-surface-container-low/50 backdrop-blur-sm">
      <Circle className="text-primary text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-hud-label text-primary uppercase">ROOT FIX 0513f</span>
      </div>
      </div>
      {/* Menu Navigation */}
      <nav className="flex flex-col gap-unit w-full max-w-xs">
      {/* START GAME Button (Primary Focus) */}
      <button className="group relative w-full flex items-center justify-between px-6 py-4 border border-outline-variant bg-surface/50 hover:bg-primary/10 hover:border-primary focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors duration-200 active:scale-95 rounded-DEFAULT backdrop-blur-md" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-transparent transition-opacity duration-300 pointer-events-none"></div>
      <span className="font-button-text text-button-text text-on-surface group-hover:text-primary transition-colors tracking-wide uppercase">START GAME</span>
      <Play className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      {/* OPTIONS Button */}
      <button className="group relative w-full flex items-center justify-between px-6 py-4 border border-outline-variant bg-surface/50 hover:bg-primary/10 hover:border-primary focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors duration-200 active:scale-95 rounded-DEFAULT backdrop-blur-md mt-2" type="button" data-action-id="options-2" onClick={actions?.["options-2"]}>
      <span className="font-button-text text-button-text text-on-surface group-hover:text-primary transition-colors tracking-wide uppercase">OPTIONS</span>
      <Settings className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      {/* CONTROLS Button */}
      <button className="group relative w-full flex items-center justify-between px-6 py-4 border border-outline-variant bg-surface/50 hover:bg-primary/10 hover:border-primary focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors duration-200 active:scale-95 rounded-DEFAULT backdrop-blur-md mt-2" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <span className="font-button-text text-button-text text-on-surface group-hover:text-primary transition-colors tracking-wide uppercase">CONTROLS</span>
      <Circle className="text-on-surface-variant group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      </button>
      {/* QUIT Button */}
      <button className="group relative w-full flex items-center justify-between px-6 py-4 border border-outline-variant bg-surface/50 hover:bg-error/10 hover:border-error focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors duration-200 active:scale-95 rounded-DEFAULT backdrop-blur-md mt-6" type="button" data-action-id="quit-4" onClick={actions?.["quit-4"]}>
      <span className="font-button-text text-button-text text-on-surface group-hover:text-error transition-colors tracking-wide uppercase">QUIT</span>
      <Circle className="text-on-surface-variant group-hover:text-error transition-colors" aria-hidden={true} focusable="false" />
      </button>
      </nav>
      {/* Footer Meta Data */}
      <div className="absolute bottom-container-padding w-full flex justify-between items-center px-container-padding max-w-lg z-10 pointer-events-none">
      <span className="font-hud-label text-[10px] text-on-surface-variant/50">SYS.VER: 1.0.42</span>
      <div className="flex gap-1">
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-on-surface-variant/30 rounded-full"></div>
      <div className="w-2 h-2 bg-on-surface-variant/30 rounded-full"></div>
      </div>
      <span className="font-hud-label text-[10px] text-on-surface-variant/50">NODE: ONLINE</span>
      </div>
      </div>
    </>
  );
}
