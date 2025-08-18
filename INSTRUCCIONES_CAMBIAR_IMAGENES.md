# 📋 INSTRUCCIONES PARA CAMBIAR IMÁGENES MANUALMENTE

## 🎯 UBICACIONES EXACTAS DE LAS IMÁGENES:

### **1. SECCIÓN "QUIÉNES SOMOS" (WhoWeAre.tsx)**
- **Archivo**: `src/components/WhoWeAre.tsx`
- **Línea**: 13-14
- **Código actual**:
```javascript
getImage('who-we-are-college', 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')
```
- **Cambiar**: Reemplaza la URL por tu imagen

### **2. SECCIÓN "ACERCA" (About.tsx)**
- **Archivo**: `src/components/About.tsx`
- **Línea**: 13-14
- **Código actual**:
```javascript
getImage('about-debate', 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')
```
- **Cambiar**: Reemplaza la URL por tu imagen

### **3. GALERÍA (Gallery.tsx)**
- **Archivo**: `src/components/Gallery.tsx`
- **Líneas**: 12-19
- **Código actual**:
```javascript
const defaultImages = [
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
];
```
- **Cambiar**: Reemplaza cada URL por tus imágenes

### **4. NOTICIAS (News.tsx)**
- **Archivo**: `src/components/News.tsx`
- **Líneas**: 12-16
- **Código actual**:
```javascript
const defaultNewsImages = [
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
];
```
- **Cambiar**: Reemplaza cada URL por tus imágenes

## 🔧 CÓMO SUBIR TUS IMÁGENES:

### **Opción 1: Usar un servicio de hosting de imágenes**
1. Sube tus imágenes a:
   - **Imgur**: https://imgur.com
   - **ImageBB**: https://imgbb.com
   - **Cloudinary**: https://cloudinary.com
2. Copia la URL directa de la imagen
3. Reemplaza las URLs en los archivos

### **Opción 2: Usar la carpeta public**
1. Sube tus imágenes a la carpeta `public/`
2. Usa rutas como: `/mi-imagen.jpg`
3. Reemplaza las URLs en los archivos

## 📝 EJEMPLO DE CAMBIO:

**ANTES:**
```javascript
'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg'
```

**DESPUÉS:**
```javascript
'https://i.imgur.com/TU_IMAGEN.jpg'
```
o
```javascript
'/mi-imagen-del-colegio.jpg'
```

## ⚠️ IMPORTANTE:
- Las imágenes deben ser **HTTPS** (no HTTP)
- Formato recomendado: JPG, PNG, WebP
- Tamaño recomendado: 800x600px o similar
- Después de cambiar, guarda y la página se actualizará automáticamente

¡Así tienes control total sobre las imágenes! 🎯