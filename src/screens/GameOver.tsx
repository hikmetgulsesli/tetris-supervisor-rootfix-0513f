// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2" | "share-3";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background Grid Decoration (Simulating paused game well behind modal) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      {/* Radial blur overlay to simulate depth */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-[12px] z-10 pointer-events-none"></div>
      {/* Game Over Modal (Canvas) */}
      <main className="relative z-20 w-full max-w-[480px] bg-surface border border-outline-variant flex flex-col items-stretch p-8 md:p-12 rounded-none shadow-[0_0_80px_rgba(0,0,0,0.8)] before:absolute before:-inset-[1px] before:border before:border-primary/20 before:-z-10 before:translate-x-[4px] before:translate-y-[4px] before:rounded-none">
      {/* Header */}
      <header className="text-center mb-8 flex flex-col items-center">
      {/* Simulated glowing scanline effect on text */}
      <h1 className="font-display-score text-display-score text-error uppercase relative inline-block drop-shadow-[0_0_12px_rgba(255,180,171,0.4)]">
                      GAME OVER
                  </h1>
      </header>
      {/* High Score Badge */}
      <div className="flex justify-center mb-8">
      <span className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary font-hud-label text-hud-label px-4 py-2 uppercase tracking-widest relative overflow-hidden group border border-tertiary shadow-[0_0_16px_rgba(222,194,154,0.3)]">
      <Circle className="text-[16px] animate-pulse" aria-hidden={true} focusable="false" />
                      New High Score!
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      </span>
      </div>
      {/* HUD Stats Module */}
      <section className="flex flex-col mb-10 border border-outline-variant bg-surface-container-low p-6 rounded-none relative">
      <div className="absolute -top-3 left-4 bg-surface px-2 font-hud-label text-hud-label text-on-surface-variant uppercase">Session Log</div>
      <div className="flex flex-col gap-4 mt-2">
      {/* Stat Row 1 */}
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-3">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Final Score</span>
      <span className="font-hud-value text-hud-value text-primary drop-shadow-[0_0_8px_rgba(190,198,224,0.3)]">45,200</span>
      </div>
      {/* Stat Row 2 */}
      <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-3">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Lines Cleared</span>
      <span className="font-hud-value text-hud-value text-on-surface">142</span>
      </div>
      {/* Stat Row 3 */}
      <div className="flex justify-between items-baseline">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">Level Reached</span>
      <span className="font-hud-value text-hud-value text-on-surface">12</span>
      </div>
      </div>
      </section>
      {/* Actions */}
      <nav className="flex flex-col gap-4">
      {/* Primary Action */}
      <button className="w-full bg-primary text-on-primary border border-primary font-button-text text-button-text py-4 uppercase tracking-[0.1em] hover:bg-surface hover:text-primary focus:outline focus:outline-2 focus:outline-primary focus:-outline-offset-4 transition-colors active:bg-primary/20 rounded-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_16px_rgba(190,198,224,0.4)] min-h-[touch-target-min]" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
                      Play Again
                  </button>
      {/* Secondary Actions Row */}
      <div className="flex gap-4">
      <button className="flex-1 bg-transparent text-on-surface border border-outline-variant font-button-text text-button-text py-3 uppercase tracking-[0.1em] hover:border-primary hover:text-primary focus:outline focus:outline-2 focus:outline-outline focus:-outline-offset-2 transition-colors active:bg-surface-container rounded-none min-h-[touch-target-min]" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
                          Main Menu
                      </button>
      <button className="flex-1 bg-transparent text-on-surface border border-outline-variant font-button-text text-button-text py-3 uppercase tracking-[0.1em] hover:border-primary hover:text-primary flex items-center justify-center gap-2 focus:outline focus:outline-2 focus:outline-outline focus:-outline-offset-2 transition-colors active:bg-surface-container rounded-none min-h-[touch-target-min]" type="button" data-action-id="share-3" onClick={actions?.["share-3"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                          Share
                      </button>
      </div>
      </nav>
      </main>
      <style>{`
              @keyframes shimmer {
                  100% {
                      transform: translateX(100%);
                  }
              }
          `}</style>
    </>
  );
}
