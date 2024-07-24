export function createSlug(text: string): string {
  return text
    .normalize('NFD') // Normalize the string to NFD (Normalization Form Decomposition)
    .replace(/[\u0300-\u036f]/g, '') // Remove accents and diacritics
    .replace(/[^\w\s]/gi, '') // Remove invalid characters
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .toLowerCase() // Convert to lowercase
  // .replace(/-+/g, '-') // Replace multiple dashes with a single dash
}
