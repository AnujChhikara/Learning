# SQL (Structured Query Language) Databases
SQL databases are relational databases that store data in tables with rows and columns. They are based on the relational model and use structured query language (SQL) for defining and manipulating data. SQL databases are well-suited for structured data and have strong support for complex queries and transactions.

# NoSQL (Not Only SQL) Databases
NoSQL databases are non-relational and designed to handle unstructured, semi-structured, or structured data. They store data in various formats such as key-value pairs, documents, graphs, and columns. NoSQL databases are often used in big data applications due to their ability to scale horizontally and handle large volumes of data.


## Common SQL Queries
SELECT: Used to retrieve data from a table.


SELECT column_name FROM table_name;
INSERT: Adds new data into a table.


INSERT INTO table_name (column1, column2) VALUES (value1, value2);
UPDATE: Modifies existing data in a table.


UPDATE table_name SET column1 = value1 WHERE condition;
DELETE: Removes data from a table.


DELETE FROM table_name WHERE condition;
CREATE: Creates a new table in the database.


CREATE TABLE table_name (column_name data_type);
ALTER: Modifies the structure of an existing table (e.g., adding/removing columns).


ALTER TABLE table_name ADD column_name data_type;
DROP: Deletes an existing table from the database.


DROP TABLE table_name;
## Transactions
A transaction in SQL is a sequence of one or more database operations that are treated as a single unit. Transactions ensure data integrity by making sure that either all operations are completed successfully, or none of them are (commonly referred to as ACID properties: Atomicity, Consistency, Isolation, Durability).

BEGIN TRANSACTION: Marks the start of a transaction.
COMMIT TRANSACTION: Confirms and saves all operations in the transaction.
ROLLBACK TRANSACTION: Reverts all changes if an error occurs.

BEGIN TRANSACTION;
-- Perform multiple operations
COMMIT TRANSACTION;
-- Or if something goes wrong
ROLLBACK TRANSACTION;

## NoSQL and Transactions
In NoSQL databases, transactions are often not as strict or required as in SQL. Some NoSQL databases support transactions but usually at the document or record level rather than across multiple entities. NoSQL databases are generally designed to handle data operations more flexibly without enforcing ACID properties as rigidly as SQL databases.