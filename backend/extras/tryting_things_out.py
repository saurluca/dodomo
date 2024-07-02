import logging


logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)


class TodoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append(task)
        logging.info("Task added")

    def remove_task(self, task):
        self.tasks.remove(task)
        logging.info("Task removed")

    def view_tasks(self):
        print(self.tasks)

    def add_sample_tasks(self):
        sample_tasks = ["Task 1", "Task 2", "Task 3"]
        for task in sample_tasks:
            self.add_task(task)


if __name__ == "__main__":
    tl = TodoList()
    tl.add_sample_tasks()
    tl.view_tasks()
    tl.add_task("Hello World")
    tl.view_tasks()
