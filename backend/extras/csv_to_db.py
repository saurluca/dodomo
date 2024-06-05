import pandas as pd
from sqlalchemy import create_engine

import os
import logging


# Set up logging
logging.basicConfig(level=logging.INFO)


def load_env_file(filepath):
    with open(filepath) as f:
        for line in f:
            # Remove any leading/trailing whitespace
            line = line.strip()
            # Skip comments and blank lines
            if not line or line.startswith("#"):
                continue
            # Split the line into key and value
            key, value = line.split(":", 1)
            # Set the environment variable
            os.environ[key] = value


def connect_to_db(env_path):
    load_env_file(env_path)
    # Get the individual components from environment variables
    postgres_user = os.getenv("POSTGRES_USER")
    postgres_password = os.getenv("POSTGRES_PASSWORD")
    postgres_host = os.getenv("POSTGRES_HOST")
    postgres_port = os.getenv("POSTGRES_PORT")
    postgres_db = os.getenv("POSTGRES_DB")

    # Construct the DATABASE_URL
    database_url = f"postgresql://{postgres_user}:{postgres_password}@{postgres_host}:{postgres_port}/{postgres_db}"

    logging.info(
        f"Database URL: postgresql://{postgres_user}:_password_@{postgres_host}:{postgres_port}/{postgres_db}"
    )

    # Connect to the database
    engine = create_engine(database_url)
    return engine


def import_data_to_db(engine, csv_file_path, table_name):
    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_file_path)

    # Import the DataFrame to the PostgreSQL database, automatically creating the table
    df.to_sql(table_name, engine, if_exists="replace", index=False)

    logging.info(f"Table {table_name} created and data imported successfully.")


def upload_csv_to_db(file_path_1, table_name):
    engine = connect_to_db("../../.env")

    logging.info("Loading data from file ...")

    df = pd.read_csv(file_path_1)

    df = df.reset_index(drop=True)

    logging.info(df.head)

    logging.info("Data pipeline completed successfully.")

    df.to_sql(table_name, engine, if_exists="replace")

    logging.info(f"Table {table_name} created and data imported successfully.")


if __name__ == "__main__":
    directory = "../../data/"
    file_path = directory + "performance_musswessels.csv"
    upload_csv_to_db(file_path, "performance_musswessels")
