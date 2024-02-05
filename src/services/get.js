class Get {
  static async getWordlist() {
    try {
      const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
      return resp.json();
    } catch (e) {
      console.error(e);
    }
  }

  static async getWord(id) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}`
      );
      return resp.json();
    } catch (e) {
      console.error(e);
    }
  }
}

export default Get;
