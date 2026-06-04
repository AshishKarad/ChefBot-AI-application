import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )

def save_order(name, mobile, email, address, recipe):

    conn = get_connection()
    cursor = conn.cursor()

    query = """
    INSERT INTO orders
    (customer_name, mobile, email, address, recipe_name)
    VALUES (%s,%s,%s,%s,%s)
    """

    values = (
        name,
        mobile,
        email,
        address,
        recipe
    )

    cursor.execute(query, values)

    conn.commit()

    order_id = cursor.lastrowid

    cursor.close()
    conn.close()

    return order_id
