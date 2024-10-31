import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import gitHubIcon from '@/assets/github-icon.svg'
import Image from 'next/image'
import GitHubIcon from '@/assets/github-icon'

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />
      </div>

      <Link
        href="auth/forgot-password"
        className="text-xs font-medium text-foreground hover:underline"
      >
        Forgot your password?
      </Link>

      <Button type="submit" className="w-full">
        Sign in with e-mail
      </Button>

      <Separator/>

      <Button type="submit" variant='outline' className="w-full">
        {/* <Image src={gitHubIcon} alt='' className='size-4 mr-2 dark:invert'/> */}
        <GitHubIcon className="mr-2 size-4 dark:invert"/>
        Sign in with Github
      </Button>
    </form>
  )
}
