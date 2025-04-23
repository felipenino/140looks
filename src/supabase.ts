// Este arquivo está sendo mantido para evitar erros de importação
// mas sem funcionalidade de Supabase

export const supabase = {
  storage: {
    from: () => ({
      upload: async () => ({ error: null, data: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  },
};