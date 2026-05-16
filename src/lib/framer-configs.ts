export const PREMIUM_SPRING = {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1,
    restDelta: 0.001
} as const;

export const SLOW_SPRING = {
    type: "spring",
    stiffness: 80,
    damping: 25,
    mass: 1.2
} as const;

export const FADE_IN_UP = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: PREMIUM_SPRING
} as const;

export const STAGGER_CONTAINER = (stagger = 0.1, delay = 0) => ({
    animate: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delay
        }
    }
});

export const SCROLL_VIEW_CONFIG = {
    once: true,
    amount: 0.2
} as const;
