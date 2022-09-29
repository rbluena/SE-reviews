export default class BuilderPerson {
  #name: string;
  #isEmployee: boolean = false;
  #isManager: boolean = false;
  #hours: number = 40;
  #isPartTimer: boolean = false;
  #balance: number = 0;
  #shoppingList: any[] = [];

  constructor(name: string) {
    this.#name = name;
  }

  makeEmployee() {
    this.#isEmployee = true;
    return this;
  }

  makeManager(hours = 40) {
    if (!this.#isEmployee) {
      throw Error(
        "User can't be assigned as manager if is not employee yet. Assign as employee first!"
      );
    }

    this.#isManager = true;
    this.#hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.#hours = hours;
    this.#isPartTimer = true;
    return this;
  }

  addBalance(balance = 0) {
    this.#balance = balance;
    return this;
  }

  withCart(list: any[] = []) {
    this.#shoppingList = list;
    return this;
  }

  get isUserEmployee() {
    return this.#isEmployee;
  }

  get isUserManager() {
    return this.#isManager;
  }
}
