<p align="center">
  <img src="./assets/mockup.png" alt="Estilo gráfico mockup" />
</p>

# Estilo Gráfico — Corporate Website

Official website for Estilo Gráfico, a lithography, printing and graphic design company based in Medellín, Colombia. Built with Astro, Tailwind CSS and deployed on Vercel.

Live site: [estilografico.co](https://estilo-grafico-co.vercel.app/)


#Features


Services showcase: labels & packaging, printed materials, large format printing, and graphic design.
Frequently Asked Questions (FAQ) section.
Client brand logo slider.
Direct WhatsApp call-to-action.
SEO optimized (sitemap, Open Graph, structured metadata).
Integrated Vercel Analytics.
Smooth page transitions with Astro View Transitions.
Fully responsive design with Tailwind CSS v4.
Custom 404 error page.


#Tech Stack

ToolVersionPurposeAstro^6.4.6Main frameworkTailwind CSS^4.3.0StylingSharp^0.35.1Image optimization@astrojs/sitemap^3.7.3Sitemap generation@vercel/analytics^2.0.1AnalyticsVercel—Hosting & deployment


#Project Structure

/
├── public/                  # Static assets (logos, favicons, og-image)
├── src/
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── layouts/             # Base page layouts
│   └── pages/               # Site routes
│       ├── index.astro      # Home page
│       ├── nosotros.astro   # About page
│       ├── 404.astro        # Custom error page
│       └── productos/       # Service pages
│           ├── etiquetas-empaques.astro
│           ├── material-impreso.astro
│           ├── gran-formato.astro
│           └── diseno-imagen.astro
├── astro.config.mjs         # Astro configuration
├── vercel.json              # Vercel configuration
├── tsconfig.json            # TypeScript configuration
└── package.json


# Contact

Estilo Gráfico

📍 Medellín, Antioquia, Colombia
📱 +57 321 642 6377
📧 marketingestilografico@gmail.com
