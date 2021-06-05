// Singleton pattern

class Person {
  private static Person instance; // = new Person();

  public static Person getInstance() {
    if (instance == null) {
      instance = new Person();
    }
    return instance;
  }

  private Person() {

  }
}

Person person = Person.getInstance();

Person person1 = new Person();
Person person2 = new Person();
