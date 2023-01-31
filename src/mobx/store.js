import { action, makeAutoObservable, runInAction } from 'mobx'
import { getLists } from '../requests';

const apiRoot = "https://todolist-ruslan.azurewebsites.net";

class Store {
    // инициируем массив объектов ToDo листа 
    isLoading = true;
    lists = [
        {
            "id": 1,
            "title": "Initialed",
            "items": [],
        },
    ];


    // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
    constructor() {
        makeAutoObservable(this)

    }

    getListsRequest() {
        return fetch(`${apiRoot}/TodoList`)
            .then(response => console.log(response.json())) // convert response to json

    }

}

export default new Store()