'use client'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeSwitcher() {
  // Hook for setting the theme
  const { theme, setTheme } = useTheme()
  //Check if theme is mounted
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // avoid rehydration errors

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="">
        <div className="flex gap-4">
          <TabsTrigger value="light" onClick={() => setTheme('light')}>
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
          </TabsTrigger>
          <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 transitional-all dark:rotate-0" />
          </TabsTrigger>
          <TabsTrigger value="system" onClick={() => setTheme('system')}>
            <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  )
}
export default ThemeSwitcher
