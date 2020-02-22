const menu_expanded_margin_left = 240

const menu_collapsed_margin_left = 64


export default function Expand(isExpanded) {
    return isExpanded ? menu_expanded_margin_left : menu_collapsed_margin_left
}

export function handleMenuExpanded(isExpanded) {
    return {
        overflow: 'hidden',
        position: 'relative',
        transition: 'all .15s',
        marginLeft: (isExpanded ? menu_expanded_margin_left : menu_collapsed_margin_left)
    }
}

export function currentPathname() {
    return window.location.pathname.substr(1, window.location.pathname.length - 1)
}