// =============================================================================
// ARQUIVO DE CERTIFICADOS / CERTIFICATES FILE
// =============================================================================
// Instrucoes / Instructions:
//
// Para cada certificado, voce pode usar:
//   1. Um caminho local: "/images/certificates/cert-1.jpg"
//   2. Um link externo (Google Drive, etc): "https://drive.google.com/uc?export=view&id=SEU_ID"
//   3. Qualquer URL publica de imagem
//
// Campos:
//   - id: identificador unico
//   - title: nome do certificado (PT)
//   - titleEn: nome do certificado (EN)
//   - issuer: instituicao emissora
//   - date: data de emissao
//   - image: caminho ou link da imagem do certificado
//   - url: link para verificacao online (opcional)
//   - category: "engineering" | "data" | "general"
// =============================================================================

export type Certificate = {
  id: string
  title: string
  titleEn: string
  issuer: string
  date: string
  image: string
  url?: string
  category: "engineering" | "data" | "general"
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Certificado de Exemplo 1",
    titleEn: "Example Certificate 1",
    issuer: "Instituicao X",
    date: "2024-01",
    image: "/images/certificates/cert-1.jpg",
    // image: "https://drive.google.com/uc?export=view&id=SEU_ID",
    url: "https://verify.example.com/cert-1",
    category: "engineering",
  },
  {
    id: "cert-2",
    title: "Certificado de Exemplo 2",
    titleEn: "Example Certificate 2",
    issuer: "Instituicao Y",
    date: "2024-03",
    image: "/images/certificates/cert-2.jpg",
    url: "",
    category: "data",
  },
  {
    id: "cert-3",
    title: "Certificado de Exemplo 3",
    titleEn: "Example Certificate 3",
    issuer: "Instituicao Z",
    date: "2023-11",
    image: "/images/certificates/cert-3.jpg",
    category: "general",
  },
]
