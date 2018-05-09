import * as Types from '@web/actions/types/app'

export function hasNavbar(havNavbar){
    return {
        type: Types.HAS_NAVBAR,
        payload: hasNavbar
    }
}