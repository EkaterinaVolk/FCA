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

    delete = (index) => {
        this.wordlist.splice(index, 1)
    }

    loadData = async () => {
        const resp = await fetch("http://itgirlschool.justmakeit.ru/api/words");
        const data = resp.json();
        console.log(resp)
        console.log(data)
        this.wordlist = data;
       
    }
}
