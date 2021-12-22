class Temperature {
    c;
    constructor(c) {
        this.c = c;
    }
    get c() {
        return this.c;
    }
    set C(c) {
        this.c = c;
    }
    get Farenheit(){
        return this.c * 9 / 5 + 32;
    }
    get Kenvin(){
        return this.c + 273.15
    }
}