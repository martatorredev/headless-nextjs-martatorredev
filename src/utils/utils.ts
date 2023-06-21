export function reemplazarEspaciosPorGuiones(texto: string): string {
  return texto.replace(/\s/g, "-").toLowerCase();
}

export function reemplazarGuionesPorEspacios(texto: string): string {
  return texto.replace(/-/g, " ");
}
