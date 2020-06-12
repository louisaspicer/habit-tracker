export const spacing = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
};

export const typography = {
    size: {
        text: {
            l: 20,
            m: 16,
            s: 14,
            xs: 12,
        },
        heading: {
            xl: 42,
            l: 24,
            m: 20,
            s: 16,
        },
    },
    lineheight: {
        body: {
            l: 28,
            m: 16,
            s: 12,
            xs: 8,
        },
        heading: {
            xl: 42,
            l: 24,
            m: 20,
            s: 16,
        },
    },
};

export type Color = keyof typeof colors;

export const colors = {
    black: "#282222",
    white: "#FFFFFF",
    gray: "#57697B",
    lightGray: "#E1E1E1",
    background: "#FBFBFB",

    pink: "#FF7171",
    blue: "#1B93EA",
    purple: "#E17CEA",
    apricot: "#FFAD80",
    green: "#4DCFA0",
};

export const misc = {
    borderRadius: 8,
    shadow: "0px 8px 12px rgba(0, 0, 0, 0.15)",
};
