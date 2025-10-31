import type { ComponentPropsWithoutRef, ElementType, MutableRefObject, ReactNode } from 'react'
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react'

type MotionStyle = {
  opacity?: number
  x?: number
  y?: number
  scale?: number
}

type Transition = {
  duration?: number
  delay?: number
  ease?: string
}

type MotionProps<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  initial?: MotionStyle
  animate?: MotionStyle
  exit?: MotionStyle
  whileInView?: MotionStyle
  transition?: Transition
  viewport?: { once?: boolean; amount?: number }
  children?: ReactNode
}

const defaultTransition: Required<Transition> = {
  duration: 0.6,
  delay: 0,
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
}

const mergeMotionStyle = (style?: MotionStyle): React.CSSProperties => {
  if (!style) return {}
  const transforms: string[] = []
  if (style.x !== undefined || style.y !== undefined) {
    const x = style.x ?? 0
    const y = style.y ?? 0
    transforms.push(`translate3d(${x}px, ${y}px, 0)`)
  }
  if (style.scale !== undefined) {
    transforms.push(`scale(${style.scale})`)
  }

  const computed: React.CSSProperties = {}
  if (transforms.length > 0) {
    computed.transform = transforms.join(' ')
  }
  if (style.opacity !== undefined) {
    computed.opacity = style.opacity
  }
  return computed
}

const useIntersection = (
  ref: MutableRefObject<Element | null>,
  options?: { once?: boolean; amount?: number },
) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (options?.once !== false) {
              observer.disconnect()
            }
          } else if (options?.once === false) {
            setVisible(false)
          }
        })
      },
      { threshold: options?.amount ?? 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, options?.once, options?.amount])

  return visible
}

const createMotionComponent = <T extends ElementType>(Tag: T) => {
  const MotionComponent = forwardRef<Element, MotionProps<T>>((props, ref) => {
    const { initial, animate, whileInView, transition, viewport, style, children, ...rest } = props
    const innerRef = useRef<Element | null>(null)
    const mergedRef = (node: Element | null) => {
      innerRef.current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref && 'current' in ref) {
        ;(ref as MutableRefObject<Element | null>).current = node
      }
    }

    const visible = useIntersection(innerRef, viewport)
    const [computed, setComputed] = useState<React.CSSProperties>(() => ({
      ...mergeMotionStyle(initial),
    }))

    useEffect(() => {
      const targetStyle = visible ? whileInView ?? animate : initial
      const mergedTransition = { ...defaultTransition, ...transition }
      const base = mergeMotionStyle(targetStyle)

      setComputed((prev) => ({
        ...prev,
        ...base,
        transition: `transform ${mergedTransition.duration}s ${mergedTransition.ease} ${mergedTransition.delay}s, opacity ${mergedTransition.duration}s ${mergedTransition.ease} ${mergedTransition.delay}s`,
      }))
    }, [animate, initial, transition, visible, whileInView])

    const combinedStyle = useMemo(() => ({
      ...computed,
      ...style,
    }), [computed, style])

    return (
      <Tag ref={mergedRef as any} style={combinedStyle} {...(rest as any)}>
        {children}
      </Tag>
    )
  })

  MotionComponent.displayName = `Motion.${typeof Tag === 'string' ? Tag : 'component'}`

  return MotionComponent
}

const elements = [
  'div',
  'section',
  'header',
  'nav',
  'footer',
  'main',
  'span',
  'ul',
  'li',
  'article',
  'aside',
  'button',
  'p',
  'h1',
  'h2',
  'h3',
] as const

type MotionElements = {
  [K in (typeof elements)[number]]: ReturnType<typeof createMotionComponent<K>>
}

export const motion = elements.reduce((acc, element) => {
  acc[element] = createMotionComponent(element)
  return acc
}, {} as MotionElements)

export const AnimatePresence = ({ children }: { children: ReactNode }) => <>{children}</>

export const useInView = (
  ref: MutableRefObject<Element | null>,
  options?: { once?: boolean; amount?: number },
) => useIntersection(ref, options)
