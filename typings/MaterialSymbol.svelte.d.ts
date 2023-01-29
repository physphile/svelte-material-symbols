import { SvelteComponentTyped } from "svelte";

export default class MaterialSymbol extends SvelteComponentTyped<{
  name: string;
  type: "outlined" | "rounded" | "sharp";

  opticalSize?: number;
  grade?: number;
  weight?: number;
  filled?: boolean;
  class?: string;
}> {}
