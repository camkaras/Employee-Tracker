INSERT INTO department (name)
VALUES
    ('Production'),
    ('Management'),
    ('Maintenance'),
    ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Production Operator", 55000, 1), 
    ("Shift Tech", 75000, 2), 
    ("Electrical Engineer", 135000, 3), 
    ("Mechanical Engineer", 120000, 4), 
    ("Team Lead", 95000, 5), 
    ("Plant Manager", 250000, 6);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
    ("Jack", "Walker", 1),
    ("Jimmy", "Smith", 1), 
    ("Greg", "Marshall", 1),
    ("Bryan", "Cooper", 1), 
    ("Steve", "Henderson", 1), 
    ("Jake", "Butcher", 2),
    ("Curtis", "Conlin", 3), 
    ("Roger", "Ryan", 3),
    ("Matt", "Baker", 4), 
    ("Shane", "King", 4),
    ("Rick", "Cook", 5), 
    ("Rachel", "Davy", 5), 
    ("Sarah", "Johnson", 6);