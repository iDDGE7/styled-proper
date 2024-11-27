import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Archivos de entrada
    format: ['cjs', 'esm'], // Formatos de salida
    dts: true, // Generar archivos de declaración de tipos
    sourcemap: true, // Generar sourcemaps
    minify: true, // Minificar el código
    clean: true, // Limpia el directorio de salida antes de construir
});
