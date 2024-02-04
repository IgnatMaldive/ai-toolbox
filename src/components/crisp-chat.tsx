import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CRISP_WEBSITE_ID = '68a381cb-8eee-4a7d-ac36-65e667a99a88'

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID)
  }, [])

  return null
}
