import { useEffect } from 'react'
import { useRouter } from 'next/router'

const potatoOAuthURI =
  'https://discord.com/api/oauth2/authorize?client_id=608921626548895755&permissions=537152512&scope=applications.commands%20bot'

export default function InvitePage() {
  const router = useRouter()
  useEffect(() => {
    router.push(potatoOAuthURI)
  })
  return (
    <>
      Redirecting to{' '}
      <a rel="noopener" href={potatoOAuthURI}>
        {potatoOAuthURI}
      </a>
      ...
    </>
  )
}
