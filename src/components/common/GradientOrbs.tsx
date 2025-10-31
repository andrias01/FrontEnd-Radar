import { animated, useSpring } from '@react-spring/web'

export const GradientOrbs = () => {
  const orbOne = useSpring({ from: { y: 0, opacity: 0.6 }, to: { y: 26, opacity: 0.85 }, loop: { reverse: true }, config: { duration: 5200 } })
  const orbTwo = useSpring({ from: { y: 10, opacity: 0.4 }, to: { y: -20, opacity: 0.7 }, loop: { reverse: true }, config: { duration: 6200 } })
  const orbThree = useSpring({ from: { y: -12, opacity: 0.5 }, to: { y: 18, opacity: 0.9 }, loop: { reverse: true }, config: { duration: 6800 } })

  return (
    <div className="pointer-events-none absolute inset-0">
      <animated.div
        style={{ opacity: orbOne.opacity, transform: `translate3d(-40px, ${orbOne.y}px, 0)` }}
        className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl"
      />
      <animated.div
        style={{ opacity: orbTwo.opacity, transform: `translate3d(0, ${orbTwo.y}px, 0)` }}
        className="absolute right-20 top-10 h-64 w-64 rounded-full bg-teal-400/30 blur-3xl"
      />
      <animated.div
        style={{ opacity: orbThree.opacity, transform: `translate3d(20px, ${orbThree.y}px, 0)` }}
        className="absolute bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-300/25 blur-3xl"
      />
    </div>
  )
}
