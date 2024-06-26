import logging
from clockify.session import ClockifySession
from datetime import datetime
from clockify.model.time_entry_model import CreateTimeEntryDTO

logging.basicConfig(level=logging.INFO)


KEY = "MDJjNTgzMDEtOGZiMy00ZjU0LTgwM2UtNWRjMGU2MzAwZDU0"

session = ClockifySession(KEY)

current_user = session.get_current_user()
workspace_id = current_user.active_workspace


def print_all_projects():
    projects = session.project.get_projects(workspace_id)

    for project in projects:
        print(f"Project {project.name}, ID: {project.id_}")


def get_project_id_by_name(name):
    projects = session.project.get_projects(workspace_id)
    for project in projects:
        if project.name == name:
            return project.id_
    raise ValueError(f"Project {name} not found.")


def add_task(description, project_name):
    # Define start and end times
    start_time = datetime(2024, 6, 26, 16, 0, 0)  # Example start time
    end_time = datetime(2024, 6, 26, 17, 0, 0)  # Example end time

    # Define other details
    billable = False
    project_id = get_project_id_by_name(project_name)
    project_id = "667af6a5222a7c76c30e3b19"
    task_id = "taskId456"

    # Create a time entry DTO
    time_entry = CreateTimeEntryDTO(
        start=start_time,
        end=end_time,
        billable=billable,
        description=description,
        projectId=project_id,
        # taskId=task_id,
    )

    session.time_entry.add_time_entry(workspace_id, current_user.id_, time_entry)
    logging.info("Successfully added time entry")


if __name__ == '__main__':
    logging.info(current_user.name)
    logging.info(workspace_id)
    add_task("Playing around", "kando")
