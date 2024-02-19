const TRANS_TIME = "0.2s";

class theme {
    fontNunito;
    transDefault;
    colorWhite;
    colorText;
    colorBackground;
    colorElement;
    colorInput;
    constructor(textColor: string, backgroundColor: string, elementColor: string, inputColor: string) {
        this.colorText = textColor;
        this.colorBackground = backgroundColor;
        this.colorElement = elementColor;
        this.colorInput = inputColor;
        this.fontNunito = "\"Nunito Sans\", \"Arial\", sans-serif";
        this.transDefault = TRANS_TIME +  " ease";
        this.colorWhite = "hsl(0, 0%, 100%)";
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

export {lightTheme, darkTheme, TRANS_TIME}