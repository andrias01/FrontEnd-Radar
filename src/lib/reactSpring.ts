import type { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react'
import { createElement, forwardRef, useEffect, useMemo, useState } from 'react'

type SpringValues = Record<string, number>

type SpringConfig = {
  from: SpringValues
  to: SpringValues
  loop?: boolean | { reverse?: boolean }
  config?: { duration?: number }
}

export const useSpring = ({ from, to, loop, config }: SpringConfig) => {
  const [style, setStyle] = useState<Record<string, number>>(() => ({ ...from }))

  useEffect(() => {
    let frame: number
    let start: number | null = null
    let direction = 1
    const duration = config?.duration ?? 4000
    let cancelled = false

    const step = (timestamp: number) => {
      if (cancelled) return
      if (start === null) {
        start = timestamp
      }
      const elapsed = timestamp - start
      let progress = Math.min(elapsed / duration, 1)
      if (direction === -1) {
        progress = 1 - progress
      }

      const next: Record<string, number> = {}
      const keys = new Set([...Object.keys(from), ...Object.keys(to)])
      keys.forEach((key) => {
        const fromValue = from[key] ?? 0
        const toValue = to[key] ?? 0
        next[key] = fromValue + (toValue - fromValue) * progress
      })
      setStyle(next)

      if (elapsed < duration) {
        frame = requestAnimationFrame(step)
      } else if (loop) {
        const reverse = typeof loop === 'object' ? loop.reverse !== false : true
        direction = reverse ? -direction : direction
        start = null
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)

    return () => {
      cancelled = true
      if (frame) {
        cancelAnimationFrame(frame)
      }
    }
  }, [config?.duration, from, loop, to])

  return style
}

type AnimatedProps<T extends ElementType> = ComponentPropsWithoutRef<T>

type AnimatedElements = {
  [K in 'div' | 'span' | 'section' | 'article']: ReturnType<typeof createAnimatedComponent<K>>
}

function createAnimatedComponent<T extends ElementType>(Tag: T) {
  const AnimatedComponent = forwardRef<Element, AnimatedProps<T>>(({ style, ...rest }, ref) => {
    const mergedStyle = useMemo<CSSProperties>(() => ({ ...style }), [style])
    const ComponentTag = Tag as any
    return createElement(ComponentTag, { ref, style: mergedStyle, ...(rest as any) })
  })
  AnimatedComponent.displayName = `Animated.${typeof Tag === 'string' ? Tag : 'component'}`
  return AnimatedComponent
}

export const animated: AnimatedElements = {
  div: createAnimatedComponent('div'),
  span: createAnimatedComponent('span'),
  section: createAnimatedComponent('section'),
  article: createAnimatedComponent('article'),
}
