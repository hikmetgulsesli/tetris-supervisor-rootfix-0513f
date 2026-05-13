// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Circle, Pause, RotateCw, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "button-4-4" | "button-5-5" | "button-6-6" | "drop-7";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-container-padding h-14 z-50">
      <div className="flex items-center gap-4">
      <span className="font-hud-label text-hud-label font-bold tracking-tighter text-primary uppercase">Tetris Supervisor Root Fix 0513f</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-primary hover:text-primary transition-colors duration-200 active:scale-95 flex items-center justify-center w-touch-target-min h-touch-target-min focus:outline focus:outline-2 focus:outline-on-surface" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Pause  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:text-primary transition-colors duration-200 active:scale-95 flex items-center justify-center w-touch-target-min h-touch-target-min focus:outline focus:outline-2 focus:outline-on-surface" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-grow flex flex-col md:flex-row justify-center items-start md:items-center p-container-padding gap-8 relative z-10">
      {/* Left Sidebar: Hold & Stats */}
      <aside className="flex flex-col gap-6 w-full md:w-48 order-2 md:order-1 items-center md:items-end">
      {/* Hold Module */}
      <div className="hud-box w-32 flex flex-col">
      <div className="px-2 py-1 border-b border-outline-variant bg-surface-container-high">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block text-center">Hold</span>
      </div>
      <div className="h-24 flex items-center justify-center p-4 bg-surface-container">
      {/* I Piece in Hold */}
      <div className="grid grid-cols-4 grid-rows-1 gap-[1px]">
      <div className="w-6 h-6 tetromino-cyan"></div>
      <div className="w-6 h-6 tetromino-cyan"></div>
      <div className="w-6 h-6 tetromino-cyan"></div>
      <div className="w-6 h-6 tetromino-cyan"></div>
      </div>
      </div>
      </div>
      {/* Stats Module */}
      <div className="hud-box w-48 flex flex-col mt-auto">
      <div className="px-2 py-1 border-b border-outline-variant bg-surface-container-high">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block text-center">Stats</span>
      </div>
      <div className="p-4 bg-surface-container flex flex-col gap-4">
      <div>
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block">Lines</span>
      <span className="font-hud-value text-hud-value text-on-surface block">42</span>
      </div>
      <div>
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block">High Score</span>
      <span className="font-hud-value text-hud-value text-on-surface block">8,450</span>
      </div>
      </div>
      </div>
      </aside>
      {/* Center: Game Board (10x20 Grid) */}
      <section className="order-1 md:order-2 flex justify-center w-full md:w-auto">
      <div className="relative bg-primary-container border-2 border-outline-variant game-grid w-[320px] h-[640px] overflow-hidden shadow-[0_0_24px_rgba(15,23,42,0.8)]">
      {/* Placed Blocks (Static) */}
      {/* Bottom Row */}
      <div className="absolute bottom-0 left-[0px] w-block-size h-block-size tetromino-blue"></div>
      <div className="absolute bottom-0 left-[32px] w-block-size h-block-size tetromino-blue"></div>
      <div className="absolute bottom-0 left-[64px] w-block-size h-block-size tetromino-blue"></div>
      <div className="absolute bottom-0 left-[160px] w-block-size h-block-size tetromino-orange"></div>
      <div className="absolute bottom-0 left-[192px] w-block-size h-block-size tetromino-orange"></div>
      <div className="absolute bottom-0 left-[224px] w-block-size h-block-size tetromino-orange"></div>
      <div className="absolute bottom-[32px] left-[64px] w-block-size h-block-size tetromino-blue"></div>
      <div className="absolute bottom-[32px] left-[160px] w-block-size h-block-size tetromino-orange"></div>
      {/* Falling Piece (Active) */}
      {/* T Piece */}
      <div className="absolute top-[160px] left-[128px] w-block-size h-block-size tetromino-purple z-10"></div>
      <div className="absolute top-[192px] left-[96px] w-block-size h-block-size tetromino-purple z-10"></div>
      <div className="absolute top-[192px] left-[128px] w-block-size h-block-size tetromino-purple z-10"></div>
      <div className="absolute top-[192px] left-[160px] w-block-size h-block-size tetromino-purple z-10"></div>
      {/* Ghost Piece */}
      <div className="absolute bottom-[0px] left-[128px] w-block-size h-block-size ghost-piece"></div>
      <div className="absolute bottom-[0px] left-[96px] w-block-size h-block-size ghost-piece"></div>
      <div className="absolute bottom-[32px] left-[128px] w-block-size h-block-size ghost-piece"></div>
      <div className="absolute bottom-[0px] left-[160px] w-block-size h-block-size ghost-piece"></div>
      </div>
      </section>
      {/* Right Sidebar: Next & HUD */}
      <aside className="flex flex-col gap-6 w-full md:w-48 order-3 items-center md:items-start">
      {/* HUD Modules */}
      <div className="w-full flex flex-col gap-4">
      <div className="hud-box w-full flex flex-col">
      <div className="px-2 py-1 border-b border-outline-variant bg-surface-container-high">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block text-center">Score</span>
      </div>
      <div className="p-4 bg-surface-container text-center">
      <span className="font-display-score text-display-score text-primary block">1240</span>
      </div>
      </div>
      <div className="hud-box w-full flex flex-col">
      <div className="px-2 py-1 border-b border-outline-variant bg-surface-container-high">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block text-center">Level</span>
      </div>
      <div className="p-4 bg-surface-container text-center">
      <span className="font-hud-value text-hud-value text-on-surface block text-3xl">5</span>
      </div>
      </div>
      </div>
      {/* Next Module */}
      <div className="hud-box w-32 flex flex-col">
      <div className="px-2 py-1 border-b border-outline-variant bg-surface-container-high">
      <span className="font-hud-label text-hud-label text-on-surface-variant uppercase block text-center">Next</span>
      </div>
      <div className="flex flex-col items-center justify-start p-4 bg-surface-container gap-6 min-h-[240px]">
      {/* Next 1: O Piece */}
      <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">
      <div className="w-6 h-6 tetromino-yellow"></div>
      <div className="w-6 h-6 tetromino-yellow"></div>
      <div className="w-6 h-6 tetromino-yellow"></div>
      <div className="w-6 h-6 tetromino-yellow"></div>
      </div>
      {/* Next 2: Z Piece */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="w-6 h-6 tetromino-red"></div>
      <div className="w-6 h-6 tetromino-red"></div>
      <div className="col-start-2 w-6 h-6 tetromino-red"></div>
      <div className="col-start-3 w-6 h-6 tetromino-red"></div>
      </div>
      {/* Next 3: S Piece */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px]">
      <div className="col-start-2 w-6 h-6 tetromino-green"></div>
      <div className="col-start-3 w-6 h-6 tetromino-green"></div>
      <div className="col-start-1 row-start-2 w-6 h-6 tetromino-green"></div>
      <div className="col-start-2 row-start-2 w-6 h-6 tetromino-green"></div>
      </div>
      </div>
      </div>
      </aside>
      </main>
      {/* Mobile Touch Controls (Visible on desktop for demonstration as requested) */}
      <footer className="bg-surface-container border-t border-outline-variant p-4 w-full z-40 mt-auto flex flex-col gap-4 pb-8">
      <div className="flex justify-between max-w-lg mx-auto w-full px-4">
      {/* Left Controls: Movement */}
      <div className="flex gap-2">
      <button className="control-btn text-on-surface flex items-center justify-center w-14 h-14 rounded focus:outline focus:outline-2 focus:outline-on-surface transition-colors" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <ArrowLeft className="text-3xl" aria-hidden={true} focusable="false" />
      </button>
      <div className="flex flex-col gap-2">
      <button className="control-btn text-on-surface flex items-center justify-center w-14 h-14 rounded focus:outline focus:outline-2 focus:outline-on-surface transition-colors" type="button" data-action-id="button-4-4" onClick={actions?.["button-4-4"]}>
      <Circle className="text-3xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <button className="control-btn text-on-surface flex items-center justify-center w-14 h-14 rounded focus:outline focus:outline-2 focus:outline-on-surface transition-colors" type="button" data-action-id="button-5-5" onClick={actions?.["button-5-5"]}>
      <ArrowRight className="text-3xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Right Controls: Action */}
      <div className="flex gap-4">
      <button className="control-btn text-on-surface flex items-center justify-center w-14 h-14 rounded-full focus:outline focus:outline-2 focus:outline-on-surface transition-colors" type="button" data-action-id="button-6-6" onClick={actions?.["button-6-6"]}>
      <RotateCw className="text-2xl" aria-hidden={true} focusable="false" />
      </button>
      <button className="control-btn border-primary text-primary hover:bg-primary/10 flex items-center justify-center w-16 h-16 rounded-full focus:outline focus:outline-2 focus:outline-primary transition-colors" type="button" data-action-id="drop-7" onClick={actions?.["drop-7"]}>
      <span className="font-button-text text-button-text uppercase tracking-widest text-xs">Drop</span>
      </button>
      </div>
      </div>
      </footer>
    </>
  );
}
