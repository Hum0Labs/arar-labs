import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[86rem] px-6 sm:px-10">{children}</div>
}
