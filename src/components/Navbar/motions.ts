export const topIcon = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: 45,
        background: "white",

    }
}

export const centerIcon = {
    closed: {
        opacity: 1
    },
    opened: {
        opacity: 0,
    }
}

export const bottomIcon = {
    closed: {
        rotate: 0
    },
    opened: {
        rotate: -45,
        background: "white",
    }
}

export const menuVariant = {
    closed: {
        x: "-100vw",
        opacity: 0
    },
    opened: {
        x: 0,
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2 // start animation. then, deley time for children 
        }
    }
}
export const menuListItem = {
    closed: {
        x: -10,
        opacity: 0
    },
    opened: {
        x: 0,
        opacity: 1
    },
}