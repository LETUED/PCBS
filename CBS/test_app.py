# /Users/jeondonghwan/PycharmProjects/CBS/CBS/test_app.py

import unittest
from flask import Flask
from flask_testing import TestCase
from CBS.app import app, get_crypto_data

class TestCryptoAPI(TestCase):

    def create_app(self):
        app.config['TESTING'] = True
        return app

    def test_crypto_endpoint(self):
        response = self.client.get('/api/crypto')
        self.assertEqual(response.status_code, 200)
        data = response.json
        self.assertIsInstance(data, list)
        self.assertGreater(len(data), 0)

    def test_crypto_data_format(self):
        data = get_crypto_data()
        self.assertIsInstance(data, list)
        for item in data:
            self.assertIn('name', item)
            self.assertIn('price', item)
            self.assertIn('change', item)
            self.assertTrue(isinstance(item['name'], str))
            self.assertTrue(isinstance(item['price'], str))
            self.assertTrue(isinstance(item['change'], str))

if __name__ == '__main__':
    unittest.main()
