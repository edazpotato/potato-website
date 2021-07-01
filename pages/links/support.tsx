import { useEffect } from 'react'
import { useRouter } from 'next/router'

const supportLink = 'https://discord.gg/mzR7eeZ'

export default function SupportPage() {
  const router = useRouter()
  useEffect(() => {
    router.push(supportLink)
  })
  return (
    <>
      Redirecting to{' '}
      <a rel="noopener" href={supportLink}>
        {supportLink}
      </a>
      ...
    </>
  )
}
