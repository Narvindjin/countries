
class theme {
    fontNunito: "\"Nunito Sans\", \"Arial\", sans-serif";
    transTime: "0.2s";
    transDefault: "0.3s ease";
    colorWhite: "hsl(0, 0%, 100%)";
    colorText;
    colorBackground;
    colorElement;
    colorInput;
    constructor(textColor, backgroundColor, elementColor, inputColor) {
        this.colorText = textColor;
        this.colorBackground = backgroundColor;
        this.colorElement = elementColor;
        this.colorInput = inputColor;
    }
}

const lightTheme = new theme(
    "hsl(200, 15%, 8%)",
    "hsl(0, 0%, 98%)",
    "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 52%)",
)

const darkTheme = new theme(
    "hsl(0, 0%, 100%)",
    "hsl(207, 26%, 17%)",
    "hsl(209, 23%, 22%)",
    "hsl(209, 23%, 22%)",
)

export {lightTheme, darkTheme}