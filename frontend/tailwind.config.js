const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').UserConfig} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        'phone-xs': {'min': '320px'},
        'phone-sm': {'min': '375px'},
        'phone-md': {'min': '425px'},
        'tablet': {'min': '768px'},
        'laptop': {'min': '1024px'},
        'desktop': {'min': '1280px'},
        'xl-desktop': {'min': '1440px'},
        '2xl-desktop': {'min': '1680px'},
        '3xl-desktop': {'min': '1920px'},
        '4xl-desktop': {'min': '2560px'},
        '5xl-desktop': {'min': '3440px'},
        'iphone-mini': {'raw': '(min-width: 360px) and (min-resolution: 3dppx)'},
        'iphone': {'raw': '(min-width: 393px) and (min-resolution: 3dppx)'},
        'iphone-pro-max': {'raw': '(min-width: 428px) and (min-resolution: 3dppx)'},
        'samsung-s21': {'raw': '(min-width: 360px) and (min-resolution: 3dppx)'},
        'samsung-s21-plus': {'raw': '(min-width: 393px) and (min-resolution: 3dppx)'},
        'samsung-s21-ultra': {'raw': '(min-width: 408px) and (min-resolution: 3dppx)'},
        'google-pixel': {'raw': '(min-width: 384px) and (min-resolution: 3dppx)'},
        'pixel-pro': {'raw': '(min-width: 420px) and (min-resolution: 3dppx)'},
        'oneplus': {'raw': '(min-width: 411px) and (min-resolution: 3dppx)'},
        'oneplus-pro': {'raw': '(min-width: 428px) and (min-resolution: 3dppx)'},
        'xiaomi': {'raw': '(min-width: 426px) and (min-resolution: 3dppx)'},
        'ipad-air': {'raw': '(min-width: 823px) and (min-resolution: 2dppx)'},
        'ipad-pro': {'raw': '(min-width: 1024px) and (min-resolution: 2dppx)'},
        'samsung-tab-s8-plus': {'raw': '(min-width: 720px) and (min-resolution: 2dppx)'},
        'samsung-tab-s8-ultra': {'raw': '(min-width: 831px) and (min-resolution: 2dppx)'},
        'amazon-fire-hd': {'raw': '(min-width: 768px) and (min-resolution: 2dppx)'},
        'lenovo-tab-p11-plus': {'raw': '(min-width: 768px) and (min-resolution: 2dppx)'},
        'surface-pro-8': {'raw': '(min-width: 961px) and (min-resolution: 2dppx)'},
        'imac': {'raw': '(min-width: 1920px) and (min-resolution: 2dppx)'},
        'macbook-air': {'raw': '(min-width: 1280px) and (min-resolution: 2dppx)'},
        'macbook-pro': {'raw': '(min-width: 1536px) and (min-resolution: 2dppx)'},
        'surface-studio': {'raw': '(min-width: 3360px) and (min-resolution: 2dppx)'},
        'dell-inspiron': {'raw': '(min-width: 1440px) and (min-resolution: 2dppx)'},
        'dell-xps': {'raw': '(min-width: 1600px) and (min-resolution: 2dppx)'},
        'hp-pavilion': {'raw': '(min-width: 1440px) and (min-resolution: 2dppx)'},
        'hp-spectre': {'raw': '(min-width: 1536px) and (min-resolution: 2dppx)'},
        'lenovo-ideapad-flex': {'raw': '(min-width: 1440px) and (min-resolution: 2dppx)'},
        'lenovo-thinkpad-carbon': {'raw': '(min-width: 1440px) and (min-resolution: 2dppx)'},
        'surface-laptop': {'raw': '(min-width: 1440px) and (min-resolution: 2dppx)'},
        'surface-laptop-studio': {'raw': '(min-width: 1536px) and (min-resolution: 2dppx)'},
        'ultra-wide': {'min': '1050px'},
        'wide-xga': {'min': '1366px'},
        'hd': {'min': '1360px'},
        '4k': {'min': '3000px'},
        'wxga': {'min': '1152px'},
        'vga': {'min': '640px'},
        'xga': {'min': '1024px'},
        'svga': {'min': '800px'},
        'xga-plus': {'min': '1152px'},
        'uxga': {'min': '1600px'},
        ...defaultTheme.screens, // Preserve default screen sizes
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};