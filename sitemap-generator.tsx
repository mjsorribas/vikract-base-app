import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Definimos la interfaz para las rutas
interface Route {
  path: string;
  priority: string;
  freq: string;
}

// Importamos las rutas manualmente para evitar importaciones de CSS
const routes: Route[] = [
  { path: "/", priority: "1.0", freq: "monthly" },
  { path: "/contactus", priority: "0.7", freq: "monthly"},
  { path: "/prices", priority: "0.7", freq: "monthly"},
  { path: "/blog", priority: "0.8", freq: "daily" },
  { path: "/blog/page/:id", priority: "0.7", freq: "monthly" },
  { path: "/aboutus", priority: "0.7", freq: "monthly" },
  { path: "/termsandconditions", priority: "0.7", freq: "monthly" },
  { path: "/cookies", priority: "0.7", freq: "monthly" },
  { path: "/products", priority: "0.7", freq: "monthly" },
  { path: "/roadmap", priority: "0.7", freq: "monthly" },
  { path: "/features", priority: "0.7", freq: "monthly" },
  { path: "/documentationfordevs", priority: "0.7", freq: "monthly" },
  { path: "/features/dynamicmodal", priority: "0.7", freq: "monthly" }
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
        <changefreq>${route.freq}</changefreq>
        <priority>${route.path === '/' ? '1.0' : route.priority }</priority>
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