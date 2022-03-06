import unittest
from api import *


class TestPathFinding(unittest.TestCase):
    def test_outputs(self):
        # Testing return type
        self.assertEqual(type(search(0, 4)), tuple)
        distances, prev = search(0, 4)
        # Testing correctness of path
        self.assertEqual(generate_path(0, 4, prev), [0, 1, 3, 4])
