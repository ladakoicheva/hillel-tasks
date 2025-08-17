let timer = parseInt(prompt("Введите количество секунд"));
const counter = {
  value: 0,

  increment() {
    const interval = setInterval(() => {
      this.value++;
      console.log(this.value);
      if (this.value === timer) {
        clearInterval(interval);
        console.log("time is over");
      }
    }, 1000);
  },
};

counter.increment();



//Реализовать метод increment, который увеличивает value на 1 каждую секунду,
// используя стрелочную функцию внутри setInterval(придется погуглить этот метод) для сохранения контекста this.
