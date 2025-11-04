import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create Supabase client if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey && supabaseUrl !== 'your_supabase_project_url' 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Función para subir imagen
export const uploadImage = async (file: File, path: string) => {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }
  
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
  if (!supabase) {
    throw new Error('Supabase not configured')
  }
  
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
  if (!supabase) {
    return defaultUrl
  }
  
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
  if (!supabase) {
    return []
  }
  
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