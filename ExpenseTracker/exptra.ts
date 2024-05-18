interface ExpenseTask {
    id: number,
    amount: string,
    category: string,
    date: string,
    completed: boolean
}

class ExpenseApp {
    ExpenseTasks: ExpenseTask[];
    AmountHTML: HTMLInputElement;
    CategoryHTML: HTMLInputElement;
    DateHTML: HTMLInputElement;
    ExpenseItemsHTML: HTMLUListElement;

    constructor() {
        this.ExpenseTasks = [];
        this.AmountHTML = document.getElementById("Amount") as HTMLInputElement;
        this.CategoryHTML = document.getElementById("Category") as HTMLInputElement;
        this.DateHTML = document.getElementById("date") as HTMLInputElement;
        this.ExpenseItemsHTML = document.getElementById("ExpenseItems") as HTMLUListElement;
    }

    addNewExpense(amounts: string, categorys: string, dates: string) {
        const result: HTMLElement = document.getElementById('result') as HTMLElement;
        const newTask: ExpenseTask = {
            id: (new Date()).getTime(),
            amount: amounts,
            category: categorys,
            date: dates,
            completed: false
        }

        this.ExpenseTasks.push(newTask);
        this.renderTasks();
        this.AmountHTML.value = '';
        this.CategoryHTML.value = '';
        this.DateHTML.value = '';
    }


    removeTask(id: number) {
        this.ExpenseTasks = this.ExpenseTasks.filter(task => task.id !== id);
        this.renderTasks();
    }

    renderTasks() {
        this.ExpenseItemsHTML.innerHTML = '';
        this.ExpenseTasks.forEach((ExpenseTask: ExpenseTask) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="a">${ExpenseTask.amount}</span>
                <span class="a">${ExpenseTask.category}</span>
                <span class="a">${ExpenseTask.date}</span>
                <button onclick="expenseApp.removeTask(${ExpenseTask.id})"><i class="bi bi-trash3-fill"></i></button>`;
            this.ExpenseItemsHTML.appendChild(listItem);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const expenseApp = new ExpenseApp();
    (window as any).expenseApp = expenseApp;
});
