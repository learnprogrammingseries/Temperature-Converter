class Converter {
    constructor() {

    }

    static FtoC(f) {
        return (f - 32) * 5 / 9;
    }
    static CtoF(c) {
        return c * 9 / 5 + 32;
    }
    static KtoC(k) {
        return k - 273.15;
    }
    static CtoK(c) {
        return Number(c) + 273.15;
    }
    static KtoF(k) {
        return (k - 273.15) * 9 / 5 + 32;
    }
    static FtoK(f) {
        return 273.15 + (f - 32) * 5 / 9;
    }

}
