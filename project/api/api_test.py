import unittest
from api import *

class TestPathFinding(unittest.TestCase):
    def test_outputs(self):
        self.assertEqual(type(Search(0, 4)), tuple)
        distances, prev = Search(0, 4)
        self.assertEqual(GeneratePath(0, 4, prev), [0, 1, 3, 4])
