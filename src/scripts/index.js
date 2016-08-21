import App from './modules/app';

const myApp = new App();

const list1 = myApp.createList('Chores'); 

const task1 = myApp.createTask('Do laundry', 'High');

list1.addTask(task1);

myApp.MasterList.addActiveList(list1);

console.log(myApp);









