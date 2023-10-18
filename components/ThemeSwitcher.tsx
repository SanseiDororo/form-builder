'use client'
import { SunIcon } from '@radix-ui/react-icons'
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

  if (!mounted) return null

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="light" onClick={() => setTheme('light')}>
          <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
export default ThemeSwitcher
