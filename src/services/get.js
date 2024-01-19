class Get {
    static async getWordlist() {
        try {
          const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
          return resp.json();
        } catch (e) {
            console.error(e)
        }
      }
}

export default Get;