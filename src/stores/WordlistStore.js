import {makeAutoObservable, runInAction} from 'mobx';

export default class WordlistStore {
    isLoaded = false
    

    wordlist = [];

    constructor() {
        makeAutoObservable(this);
    }
 
    add = (word) => {
        this.wordlist.push(word);
    }

    remove = (id) => {
        this.wordlist.filter(word => word.id != id);
    }

    update = (list) => {
        this.wordlist = list;
    }

    loadData = async () => {
        if(this.isLoaded) {
            return;
        }
        fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((res) => {
            return res.json();
          })
          .then((data) => {
            runInAction(() => {
                this.wordlist = data;
                console.log(data)
                this.isLoaded = true;
              })
          })
          .catch((err) => {
            console.log('Ошибка', err);
          });
   }
}


