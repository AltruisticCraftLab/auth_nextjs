"use client"

import * as React from "react"


import dynamic from "next/dynamic"
// import { ThemeProvider as NextThemesProvider } from "next-themes"

// import { type ThemeProviderProps } from "next-themes/dist/types"
// import { type ThemeProviderProps } from "next-themes"

const NextThemesProvider = dynamic(
	() => import('next-themes').then((e) => e.ThemeProvider),
	{
		ssr: false,
	}
)

import { ComponentProps } from "react";
type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;



export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
