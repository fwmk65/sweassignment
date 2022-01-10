-- TODO: remove this file after unit testing is complete, or in final production
-- Just some toy data so that we can get pathfinding done without
-- Having to have the real database yet
-- The Graph looks like:

-- 1 - 2 - 3
--     | 
--     4
--     | 
--     5


CREATE TABLE rooms(
    roomID INTEGER PRIMARY KEY,
    adjacent TEXT
);

INSERT INTO rooms values(
    1, "2"
);

INSERT INTO rooms values(
    2, "1, 3, 4"
);

INSERT INTO rooms values(
    3, "2"
);

INSERT INTO rooms values(
    4, "2, 5"
);

INSERT INTO rooms values(
    5, "4"
);