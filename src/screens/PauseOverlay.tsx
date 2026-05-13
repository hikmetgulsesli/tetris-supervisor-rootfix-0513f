// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "quit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Background (Game Board Context) */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
      {/* Center Game Well */}
      <div className="w-[320px] h-[640px] border-2 border-outline-variant relative grid grid-cols-10 grid-rows-20 gap-px bg-surface-container-lowest">
      {/* Grid Lines */}
      <div className="absolute inset-0 border-[0.5px] border-outline-variant/20 border-dashed pointer-events-none grid grid-cols-10 grid-rows-20 w-full h-full">
      {/* Repeated blocks for grid effect */}
      <div className="border-[0.5px] border-outline-variant/20"></div>
      <div className="border-[0.5px] border-outline-variant/20"></div>
      </div>
      {/* Mock Pieces */}
      <div className="col-start-4 row-start-19 w-full h-full bg-secondary border-t border-l border-white/30"></div>
      <div className="col-start-5 row-start-19 w-full h-full bg-secondary border-t border-l border-white/30"></div>
      <div className="col-start-6 row-start-19 w-full h-full bg-secondary border-t border-l border-white/30"></div>
      <div className="col-start-7 row-start-19 w-full h-full bg-secondary border-t border-l border-white/30"></div>
      </div>
      {/* Left HUD Context */}
      <div className="absolute left-8 top-1/4 flex flex-col gap-6">
      <div className="border border-outline-variant bg-surface p-4 w-32">
      <div className="font-hud-label text-hud-label text-on-surface-variant uppercase mb-2">Hold</div>
      <div className="w-full h-16 bg-surface-container-low flex items-center justify-center">
      <div className="w-8 h-8 bg-tertiary border-t border-l border-white/30"></div>
      </div>
      </div>
      <div className="border border-outline-variant bg-surface p-4 w-32">
      <div className="font-hud-label text-hud-label text-on-surface-variant uppercase mb-2">Score</div>
      <div className="font-display-score text-display-score text-primary">02450</div>
      </div>
      </div>
      </div>
      {/* PAUSE MODAL OVERLAY */}
      {/* The exact requirement: Semi-transparent dark overlay (#0F172A at 80% opacity) */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-container/80 backdrop-blur-md">
      {/* Modal Container */}
      <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
      {/* Small Stat Box (Current Score) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-surface border border-outline-variant px-6 py-2 flex flex-col items-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-widest">Current Score</span>
      <span className="font-hud-value text-hud-value text-primary">02450</span>
      </div>
      {/* Header */}
      <h1 className="font-headline-lg text-[64px] font-extrabold text-on-surface uppercase tracking-tighter mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      Paused
                  </h1>
      {/* Actions Menu */}
      <div className="flex flex-col gap-4 w-full max-w-[240px]">
      {/* Resume Button (Primary Focus) */}
      <button className="group relative w-full h-[56px] bg-transparent border-2 border-primary hover:bg-primary transition-colors duration-200 flex items-center justify-center focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 active:bg-primary-fixed-dim" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <span className="font-button-text text-button-text text-primary group-hover:text-on-primary transition-colors duration-200 uppercase tracking-widest">
                              Resume
                          </span>
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary group-hover:border-on-primary transition-colors duration-200 -translate-x-1 -translate-y-1"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary group-hover:border-on-primary transition-colors duration-200 translate-x-1 translate-y-1"></div>
      </button>
      {/* Restart Button */}
      <button className="w-full h-[56px] bg-surface-container border border-outline-variant hover:border-on-surface transition-colors duration-200 flex items-center justify-center focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 active:bg-surface-container-high" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <span className="font-button-text text-button-text text-on-surface-variant uppercase tracking-widest hover:text-on-surface transition-colors duration-200">
                              Restart
                          </span>
      </button>
      {/* Quit Button */}
      <button className="w-full h-[56px] bg-surface-container border border-outline-variant hover:border-error transition-colors duration-200 flex items-center justify-center mt-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 active:bg-surface-container-high group" type="button" data-action-id="quit-to-menu-3" onClick={actions?.["quit-to-menu-3"]}>
      <span className="font-button-text text-button-text text-on-surface-variant group-hover:text-error transition-colors duration-200 uppercase tracking-widest flex items-center gap-2">
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                              Quit To Menu
                          </span>
      </button>
      </div>
      </div>
      </div>
    </>
  );
}
