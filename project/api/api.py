import sqlite3
from flask import Flask

app = Flask(__name__)

def QueryDatabase(path):
    """
    Function to query the database and return adjacency matrix of graph
    """
    # TODO This function will not generalise well, Add queries to find largest
    # room number and use that instead of magic numbers
    # TODO also if room number >= 10, char.isnumeric() won't pick it up. Use regexs?
    matrix = []
    db = sqlite3.connect(path)
    cursor = db.execute("SELECT roomID, adjacent FROM rooms;");
    i = 0
    for row in cursor:
        matrix.append(["-" for i in range(5)]) # TODO remove this magic number
        for char in row[1]:
            print(char)
            if char.isnumeric():
                matrix[i][int(char) - 1] = 1
        i += 1
    db.close()
    return matrix

def search():
    graph = QueryDatabase("./toy.db")
    print(graph)

@app.route("/")
def helloworld():
    return "<h1>Hello, World!</h1>"

if __name__ == "__main__":
    search()
