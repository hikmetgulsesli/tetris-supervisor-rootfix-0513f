// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, CircleUserRound, MousePointerClick, RotateCw, Settings } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2" | "button-3-3" | "start-session-4" | "back-5";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar Component */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center w-full px-container-padding h-14 z-50 fixed top-0 left-0 right-0">
      <div className="font-hud-label text-hud-label font-bold tracking-tighter text-primary dark:text-primary uppercase">
                  Tetris Supervisor Root Fix 0513f
              </div>
      <div className="flex items-center gap-4 hidden md:flex text-primary dark:text-primary">
      <button className="hover:text-primary transition-colors duration-200 active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  data-icon="settings" aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-primary transition-colors duration-200 active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  data-icon="help" aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-primary transition-colors duration-200 active:scale-95 flex items-center justify-center min-w-[44px] min-h-[44px]" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <CircleUserRound  data-icon="account_circle" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex-1 flex flex-row overflow-hidden pt-14">
      {/* SideNavBar Component */}
      <nav className="hidden md:flex flex-col bg-surface-container dark:bg-surface-container border-r border-outline-variant w-64 h-full z-40">
      <div className="p-4 border-b border-outline-variant flex items-center gap-3">
      <div className="w-10 h-10 bg-surface-container-highest border border-outline flex items-center justify-center rounded-none">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col">
      <span className="font-button-text text-button-text text-on-surface">Root Admin</span>
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase">V0513F-PRO</span>
      </div>
      </div>
      <div className="p-4 border-b border-outline-variant">
      <button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors duration-150 py-2 font-hud-label text-hud-label uppercase tracking-widest h-touch-target-min flex items-center justify-center rounded-none active:scale-95" type="button" data-action-id="start-session-4" onClick={actions?.["start-session-4"]}>
                          START_SESSION
                      </button>
      </div>
      <ul className="flex-1 overflow-y-auto py-2 flex flex-col gap-1">
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 font-hud-label text-hud-label uppercase hover:text-primary transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle  data-icon="terminal" aria-hidden={true} focusable="false" />
                              Terminal
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 font-hud-label text-hud-label uppercase hover:text-primary transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle  data-icon="leaderboard" aria-hidden={true} focusable="false" />
                              Performance
                          </a>
      </li>
      <li>
      {/* Active State */}
      <a className="flex items-center gap-3 bg-secondary-container text-on-secondary-container border-l-4 border-primary px-4 py-3 font-hud-label text-hud-label uppercase" href="#">
      <Circle  data-icon="keyboard" aria-hidden={true} focusable="false" />
                              Input Mapping
                          </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-container-highest px-4 py-3 font-hud-label text-hud-label uppercase hover:text-primary transition-colors duration-150 focus:outline focus:outline-2 focus:outline-on-surface active:bg-secondary-container/50" href="#">
      <Circle  data-icon="settings_input_component" aria-hidden={true} focusable="false" />
                              System
                          </a>
      </li>
      </ul>
      <div className="mt-auto border-t border-outline-variant py-2">
      <a className="flex items-center gap-3 text-error hover:bg-error/10 px-4 py-3 font-hud-label text-hud-label uppercase transition-colors duration-150 focus:outline focus:outline-2 focus:outline-error" href="#">
      <Circle  data-icon="power_settings_new" aria-hidden={true} focusable="false" />
                          Shutdown
                      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 overflow-y-auto bg-background p-container-padding">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Input Mapping</h1>
      <p className="text-on-surface-variant font-hud-label text-hud-label mt-1 uppercase opacity-80">Reference Documentation // V.1.0.4</p>
      </div>
      <button className="border border-outline-variant bg-surface hover:bg-surface-container-highest text-on-surface px-6 h-touch-target-min font-hud-label text-hud-label uppercase flex items-center justify-center gap-2 transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary rounded-none" type="button" data-action-id="back-5" onClick={actions?.["back-5"]}>
      <ArrowLeft className="text-[18px]" aria-hidden={true} focusable="false" />
                              BACK
                          </button>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter">
      {/* Keyboard Mapping Card */}
      <div className="col-span-1 lg:col-span-7 bg-surface-container border border-outline-variant p-6 flex flex-col gap-6 rounded-none relative overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <h2 className="font-hud-label text-hud-label text-primary uppercase border-b border-outline-variant pb-2 flex justify-between items-center">
      <span>Hardware Keyboard</span>
      <Circle className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </h2>
      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center py-4">
      {/* Movement Cluster */}
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none">
      <ArrowUp className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex gap-2">
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none">
      <ArrowLeft className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none relative">
      <div className="absolute top-1 left-1 w-1 h-1 bg-primary rounded-full"></div>
      <ArrowDown className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none">
      <ArrowRight className="text-on-surface" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <span className="font-hud-label text-hud-label text-on-surface-variant mt-2">Move / Rotate</span>
      </div>
      {/* Action Keys */}
      <div className="flex flex-col gap-4 w-full max-w-[200px]">
      <div className="flex gap-4">
      <div className="flex-1 flex flex-col items-center gap-1">
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center font-hud-value text-hud-value text-on-surface shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none">
                                                  C
                                              </div>
      <span className="font-hud-label text-[10px] text-on-surface-variant uppercase">Hold</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1">
      <div className="w-12 h-12 border-2 border-outline bg-surface-container-highest flex items-center justify-center font-hud-value text-hud-value text-on-surface shadow-[0_4px_0_0_#1b1b1d] active:shadow-none active:translate-y-1 transition-colors rounded-none">
                                                  P
                                              </div>
      <span className="font-hud-label text-[10px] text-on-surface-variant uppercase">Pause</span>
      </div>
      </div>
      <div className="flex flex-col items-center gap-1 w-full">
      <div className="w-full h-12 border-2 border-primary bg-primary/10 flex items-center justify-center font-hud-label text-hud-label text-primary uppercase shadow-[0_4px_0_0_rgba(190,198,224,0.3)] active:shadow-none active:translate-y-1 transition-colors tracking-widest rounded-none">
                                              Space
                                          </div>
      <span className="font-hud-label text-[10px] text-primary uppercase">Hard Drop</span>
      </div>
      </div>
      </div>
      </div>
      {/* Touch Screen Mapping Card */}
      <div className="col-span-1 lg:col-span-5 bg-surface-container border border-outline-variant p-6 flex flex-col gap-6 rounded-none relative">
      <h2 className="font-hud-label text-hud-label text-secondary uppercase border-b border-outline-variant pb-2 flex justify-between items-center">
      <span>Touch Telemetry</span>
      <MousePointerClick className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </h2>
      <div className="flex-1 flex items-center justify-center py-2">
      {/* Simulated Mobile Device Screen */}
      <div className="w-[200px] h-[340px] border-4 border-surface-variant bg-surface-container-lowest rounded-xl relative overflow-hidden flex flex-col shadow-lg">
      {/* Top Bar (Decorative) */}
      <div className="h-4 bg-surface-variant/50 w-full mb-1"></div>
      {/* Play Area Placeholder */}
      <div className="flex-1 mx-4 border border-outline-variant/30 border-dashed relative">
      {/* Tap Zones Overlay */}
      <div className="absolute inset-0 flex">
      {/* Left Side: Move Left */}
      <div className="w-1/2 h-full bg-blue-500/10 border-r border-blue-500/20 flex items-center justify-center flex-col gap-2">
      <Circle className="text-secondary opacity-50" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-[10px] text-secondary opacity-70">L</span>
      </div>
      {/* Right Side: Move Right */}
      <div className="w-1/2 h-full bg-blue-500/10 flex items-center justify-center flex-col gap-2">
      <Circle className="text-secondary opacity-50" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-[10px] text-secondary opacity-70">R</span>
      </div>
      </div>
      {/* Top Zone: Rotate */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-tertiary/10 border-b border-tertiary/20 flex items-start justify-center pt-4">
      <div className="flex flex-col items-center gap-1">
      <RotateCw className="text-tertiary opacity-70" aria-hidden={true} focusable="false" />
      <span className="font-hud-label text-[8px] text-tertiary uppercase opacity-80 bg-background px-1 rounded-sm">Tap: Rotate</span>
      </div>
      </div>
      {/* Bottom Zone: Hard Drop */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-error/10 border-t border-error/20 flex items-end justify-center pb-4">
      <div className="flex flex-col items-center gap-1">
      <span className="font-hud-label text-[8px] text-error uppercase opacity-80 bg-background px-1 rounded-sm">Swipe Down</span>
      <Circle className="text-error opacity-70" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      <div className="h-6 w-full mt-1"></div>
      </div>
      </div>
      </div>
      {/* Rules & Scoring System */}
      <div className="col-span-1 lg:col-span-12 bg-surface-container border border-outline-variant p-6 flex flex-col gap-6 rounded-none">
      <h2 className="font-hud-label text-hud-label text-tertiary uppercase border-b border-outline-variant pb-2 flex justify-between items-center">
      <span>System Metrics &amp; Scoring Matrix</span>
      <Circle className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Text Explanation */}
      <div className="flex flex-col gap-4 text-on-surface-variant text-sm">
      <p className="leading-relaxed">
                                          The core objective is to manage the descending data blocks (Minos). Construct continuous horizontal lines spanning the entire matrix width (10 cells). Complete lines will be purged from memory, resulting in a structural cascade.
                                      </p>
      <ul className="flex flex-col gap-2 font-hud-label text-[11px] uppercase tracking-wide">
      <li className="flex items-center gap-2 text-on-surface">
      <span className="w-1.5 h-1.5 bg-primary"></span>
      <span className="w-16">Single:</span> 1 Line cleared. Base efficiency.
                                          </li>
      <li className="flex items-center gap-2 text-on-surface">
      <span className="w-1.5 h-1.5 bg-secondary"></span>
      <span className="w-16">Double:</span> 2 Lines cleared. Optimal routine.
                                          </li>
      <li className="flex items-center gap-2 text-on-surface">
      <span className="w-1.5 h-1.5 bg-tertiary"></span>
      <span className="w-16">Triple:</span> 3 Lines cleared. Advanced execution.
                                          </li>
      <li className="flex items-center gap-2 text-error">
      <span className="w-1.5 h-1.5 bg-error animate-pulse"></span>
      <span className="w-16 font-bold">Tetris:</span> 4 Lines cleared. Maximum yield.
                                          </li>
      </ul>
      </div>
      {/* Data Table */}
      <div className="border border-outline-variant bg-surface rounded-none overflow-hidden">
      <table className="w-full text-left font-hud-label text-hud-label">
      <thead className="bg-surface-variant text-on-surface-variant border-b border-outline-variant">
      <tr>
      <th className="px-4 py-3 font-medium uppercase tracking-wider">Operation</th>
      <th className="px-4 py-3 font-medium uppercase tracking-wider text-right">Base Output</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/50 text-on-surface">
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-4 py-3 border-l-2 border-transparent">Soft Drop</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px]">1 <span className="text-[10px] text-on-surface-variant">/cell</span></td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-4 py-3 border-l-2 border-primary">Hard Drop</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px] text-primary">2 <span className="text-[10px] text-on-surface-variant">/cell</span></td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-4 py-3 border-l-2 border-transparent">Single Clear</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px]">100</td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-4 py-3 border-l-2 border-secondary">Double Clear</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px] text-secondary">300</td>
      </tr>
      <tr className="hover:bg-surface-container-highest transition-colors">
      <td className="px-4 py-3 border-l-2 border-tertiary">Triple Clear</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px] text-tertiary">500</td>
      </tr>
      <tr className="bg-error/5 hover:bg-error/10 transition-colors">
      <td className="px-4 py-3 border-l-2 border-error font-bold text-error">Tetris Clear</td>
      <td className="px-4 py-3 text-right font-hud-value text-[14px] font-bold text-error drop-shadow-[0_0_8px_rgba(255,180,171,0.5)]">800</td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
