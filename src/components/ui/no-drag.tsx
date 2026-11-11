"use client";

import { useEffect } from "react";

/** Impede arrastar texto, imagens e links (ex.: soltar texto selecionado abre uma pesquisa). */
export function NoDrag() {
  useEffect(() => {
    const stop = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", stop);
    return () => document.removeEventListener("dragstart", stop);
  }, []);
  return null;
}
