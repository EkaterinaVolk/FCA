import {makeAutoObservable, runInAction} from 'mobx';

export default class WordlistStore {
    isLoaded = false;
    wordlist = [];
  
    constructor() {
      makeAutoObservable(this);
    }
  
    add = (word) => {
      this.wordlist.push(word);
    };
  
    remove = (id) => {
      this.wordlist = this.wordlist.filter(word => word.id !== id);
    };
  
    update = (list) => {
      this.wordlist = list;
    };
  
    loadData = async () => {
      if (this.isLoaded) {
        return;
      }
  
      try {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = await response.json();
        
        runInAction(() => {
          this.wordlist = data;
          this.isLoaded = true;
        });
      } catch (error) {
        console.error('Ошибка', error);
        runInAction(() => {
          this.isLoaded = true;
        });
      }
    };
  }


