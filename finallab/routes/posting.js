const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();