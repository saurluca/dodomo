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

    def trigger_exception(self):
        raise Exception("This is a triggered exception.")


if __name__ == "__main__":
    tl = TodoList()
    tl.add_sample_tasks()
    tl.view_tasks()
    tl.add_task("Hello World")
    tl.view_tasks()
    tl.trigger_exception()

"""
Write an insightful but concise Git commit message in a complete sentence in present tense for the following diff without prefacing it with anything, 
the response must be in the language english and must NOT be longer than 74 characters.

"""
