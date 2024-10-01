import {rgb, hsl, hsv} from "color-convert"

export type UpdateHexColorAction = {
    type: 'update-hex-color';
    payload: {
        hexColor: string;
    };
};

export type UpdateRGBColorAction = {
    type: 'update-rgb-color';
    payload: { rgb: [ number, number, number] }
}

export type UpdateHSLColorAction = {
    type: 'update-hsl-color';
    payload: { hsl: [ number, number, number] }
}

export type UpdateHSVColorAction = {
    type: 'update-hsv-color';
    payload: { hsv: [ number, number, number] }
}


export type ColorChangeSwatchAction = {
    type: 'color-change-swatch';
    payload: {
        hexColor: string;
    };
};

type ColorState = {
    hexColor: string;
}

export const initialState: ColorState = {
    hexColor: '#BADA55'
}

export type AdjustColorActions = UpdateHexColorAction | UpdateRGBColorAction | UpdateHSLColorAction | ColorChangeSwatchAction | UpdateHSVColorAction;

export const colorReducer = (
    state: ColorState = initialState,
    action: AdjustColorActions
) => {
    if (action.type === "update-hex-color") {
        const {hexColor} = action.payload;
        return {...state, hexColor};
    }
    if (action.type === "update-rgb-color") {
        const hexColor = '#' + rgb.hex(action.payload.rgb)
        return {...state, hexColor};
    }
    if (action.type === "update-hsl-color"){
        const hexColor = '#' + hsl.hex(action.payload.hsl);
        return {...state, hexColor}
    }
    if (action.type === 'color-change-swatch'){
        console.log('hexcolor', action.payload.hexColor)
        const {hexColor} = action.payload;
        return {...state, hexColor};
    }
    if (action.type === "update-hsv-color"){
        const hexColor = '#' + hsv.hex(action.payload.hsv);
        return {...state, hexColor}
    }
    return state;
};