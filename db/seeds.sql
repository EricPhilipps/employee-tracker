INSERT INTO department (department_name)
VALUES  ("Marketing"),
        ("Finance"), 
        ("Operations Management"),
        ("Human Resources"),
        ("IT");

INSERT INTO job (title, salary, department_id )
VALUES  ("Executive", 200000.00, 1),
        ("Manager", 100000.00, 1), 
        ("Operations", 70000.00, 1),
        ("Executive", 200000.00, 2),
        ("Manager", 100000.00, 2), 
        ("Operations", 70000.00, 2),
        ("Executive", 200000.00, 3),
        ("Manager", 100000.00, 3), 
        ("Operations", 70000.00, 3),
        ("Executive", 200000.00, 4),
        ("Manager", 100000.00, 4), 
        ("Operations", 70000.00, 4),
        ("Executive", 200000.00, 5),
        ("Manager", 100000.00, 5), 
        ("Operations", 70000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Wick", 1, NULL),
        ("Jon", "Snow", 2, 1),
        ("Tom", "Brady", 3, 2),
        ("Patrick", "Mahomes", 4, NULL),
        ("CAPTAIN", "KIRK", 5, 4),
        ("J", "Jets", 6, 5),
        ("Elon", "Musk", 7, NULL),
        ("John", "Smith", 8, 7), 
        ("Dalvin", "Cook", 9, 8),
        ("Brock", "Hampton", 10, NULL),
        ("Frank", "Gore", 11, 10),
        ("Steve", "Jobs", 12, 11),
        ("Bill", "Gates", 13, NULL),
        ("Spongebob", "Squarepants", 14, 13),
        ("Patrick", "Star", 15, 14);