export class TestClass {
    constructor() {
        this.add = this.add.bind(this);
    }

    add(a, b) {
        return a + b;
    }
}