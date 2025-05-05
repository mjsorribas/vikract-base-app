import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Definimos la interfaz para las rutas
interface Route {
  path: string;
}

// Importamos las rutas manualmente para evitar importaciones de CSS
const routes: Route[] = [
  { path: "/" },
  { path: "/contactus" },
  { path: "/prices" },
  { path: "/blog" },
  { path: "/blog/page/:id" },
  { path: "/aboutus" },
  { path: "/termsandconditions" },
  { path: "/cookies" },
  { path: "/products" },
  { path: "/roadmap" },
  { path: "/features" },
  { path: "/documentationfordevs" },
  { path: "/features/dynamicmodal" }
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para limpiar rutas dinámicas
function cleanPath(path: string): string {
  return path.replace(/\/:[\w-]+/g, '');
}

async function generateSitemaps() {
  const baseUrl = process.env.VITE_APP_URL || 'http://vikract.naimara.com';
  const publicDir = path.resolve(__dirname, 'public');
  
  // Asegúrate de que el directorio public existe
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generar sitemap.xml
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Generar sitemap.txt
  let sitemapTxt = '';

  // Agrega las rutas a ambos sitemaps
  routes.forEach((route) => {
    const cleanedPath = cleanPath(route.path);
    const fullUrl = `${baseUrl}${cleanedPath}`;

    // Agregar al sitemap.xml
    sitemap += `
      <url>
        <loc>${fullUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>${route.path === '/' ? '1.0' : '0.7'}</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>`;

    // Agregar al sitemap.txt
    sitemapTxt += `${fullUrl}\n`;
  });

  sitemap += `</urlset>`;

  // Guardar sitemap.xml
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generado con éxito en /public');

  // Guardar sitemap.txt
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.txt'), sitemapTxt.trim());
  console.log('✅ sitemap.txt generado con éxito en /public');
}

generateSitemaps().catch(console.error);