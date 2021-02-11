# import unittest
import pytest

import calculation

# rlease_name = 'lesson'

# def test_add_num_add_double():
#     cal = calculation.Cal()
#     assert cal.add_num_add_double(1, 1) == 4

class TestCal(object):

    @classmethod
    def setupclass(cls):
        print('start')
        cls.cal = calculation.Cal()

    def setup_method(self, method):
        print('method={}'.format(method.__name__))
        self.cal = calculation.Cal()

    def tearDown_method(self, method):
        print('method={}'.format(method.__name__))
        self.cal

    def test_add_num_add_double(self):
        cal = calculation.Cal()
        assert self.cal.add_num_add_double(1, 1) == 4

    def test_add_num_add_double_raise(self):
        cal = calculation.Cal()
        with pytest.raises(ValueError):
            self.cal.add_num_add_double('1', '1')
#     def setUp(self):
#         print('setup')
#         self.cal = calculation.Cal()
    
#     def tearDown(self):
#         print('clean up')
#         del self.cal

#     # @unittest.skip('skip!')
#     @unittest.skipIf(rlease_name == 'lesson', 'skip')
#     def test_add_num_add_double(self):
#         cal = calculation.Cal()
#         self.assertEqual(
#             self.cal.add_num_add_double(1, 1), 4)

#     def test_add_num_add_double_raise(self):
#         cal = calculation.Cal()
#         with self.assertRaises(ValueError):
#             self.cal.add_num_add_double('1', '1')

if __name__ == '__main__':
    # test_add_num_add_double()
    unittest.main()