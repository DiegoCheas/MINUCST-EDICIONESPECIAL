/*
  # Crear tabla para imágenes del sitio

  1. Nueva tabla
    - `site_images`
      - `id` (uuid, primary key)
      - `key` (text, unique) - identificador único de la imagen
      - `url` (text) - URL de la imagen
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Seguridad
    - Habilitar RLS en la tabla `site_images`
    - Agregar políticas para lectura pública y escritura autenticada
*/

CREATE TABLE IF NOT EXISTS site_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

-- Política para lectura pública (cualquiera puede ver las imágenes)
CREATE POLICY "Anyone can read site images"
  ON site_images
  FOR SELECT
  USING (true);

-- Política para escritura (solo usuarios autenticados pueden modificar)
CREATE POLICY "Authenticated users can modify site images"
  ON site_images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Crear bucket de storage para imágenes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- Política de storage para lectura pública
CREATE POLICY "Public can view images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'images');

-- Política de storage para subida autenticada
CREATE POLICY "Authenticated can upload images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'images');

-- Política de storage para actualización autenticada
CREATE POLICY "Authenticated can update images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'images');

-- Política de storage para eliminación autenticada
CREATE POLICY "Authenticated can delete images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'images');