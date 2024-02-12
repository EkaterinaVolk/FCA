class Post {
  static async addNewWordServer(obj) {
    try {
      const resp = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add",
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );
      return resp.json();
    } catch (e) {
      console.error(e);
    }
  }

  static async updateWordServer(id, obj) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );
      return resp.json();
    } catch (e) {
      console.error(e);
    }
  }

  static async deleteWordServer(id) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
          method: "POST",
        }
      );
      return resp.json();
    } catch (e) {
      console.error(e);
    }
  }
}

export default Post;
