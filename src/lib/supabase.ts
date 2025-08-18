import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Función para subir imagen
export const uploadImage = async (file: File, path: string) => {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${path}-${Date.now()}.${fileExt}`
    
    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, file)

    if (error) throw error

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(fileName)

    return publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

// Función para guardar URL de imagen en la base de datos
export const saveImageUrl = async (key: string, url: string) => {
  try {
    const { data, error } = await supabase
      .from('site_images')
      .upsert({ key, url }, { onConflict: 'key' })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error saving image URL:', error)
    throw error
  }
}

// Función para obtener URL de imagen
export const getImageUrl = async (key: string, defaultUrl: string) => {
  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('url')
      .eq('key', key)
      .single()

    if (error || !data) return defaultUrl
    return data.url
  } catch (error) {
    console.error('Error getting image URL:', error)
    return defaultUrl
  }
}

// Función para obtener todas las imágenes
export const getAllImages = async () => {
  try {
    const { data, error } = await supabase
      .from('site_images')
      .select('*')

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error getting all images:', error)
    return []
  }
}