var ExpenseApp = /** @class */ (function () {
    function ExpenseApp() {
        this.ExpenseTasks = [];
        this.AmountHTML = document.getElementById("Amount");
        this.CategoryHTML = document.getElementById("Category");
        this.DateHTML = document.getElementById("date");
        this.ExpenseItemsHTML = document.getElementById("ExpenseItems");
    }
    ExpenseApp.prototype.addNewExpense = function (amounts, categorys, dates) {
        var result = document.getElementById('result');
        var newTask = {
            id: (new Date()).getTime(),
            amount: amounts,
            category: categorys,
            date: dates,
            completed: false
        };
        this.ExpenseTasks.push(newTask);
        this.renderTasks();
        this.AmountHTML.value = '';
        this.CategoryHTML.value = '';
        this.DateHTML.value = '';
    };
    ExpenseApp.prototype.removeTask = function (id) {
        this.ExpenseTasks = this.ExpenseTasks.filter(function (task) { return task.id !== id; });
        this.renderTasks();
    };
    ExpenseApp.prototype.renderTasks = function () {
        var _this = this;
        this.ExpenseItemsHTML.innerHTML = '';
        this.ExpenseTasks.forEach(function (ExpenseTask) {
            var listItem = document.createElement('li');
            listItem.innerHTML = "\n                <span class=\"a\">".concat(ExpenseTask.amount, "</span>\n                <span class=\"a\">").concat(ExpenseTask.category, "</span>\n                <span class=\"a\">").concat(ExpenseTask.date, "</span>\n                <button onclick=\"expenseApp.removeTask(").concat(ExpenseTask.id, ")\"><i class=\"bi bi-trash3-fill\"></i></button>");
            _this.ExpenseItemsHTML.appendChild(listItem);
        });
    };
    return ExpenseApp;
}());
document.addEventListener("DOMContentLoaded", function () {
    var expenseApp = new ExpenseApp();
    window.expenseApp = expenseApp;
});
