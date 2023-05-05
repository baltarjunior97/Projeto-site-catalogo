"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Counter = require('../controllers/Counter'); var _Counter2 = _interopRequireDefault(_Counter);

const router = new (0, _express.Router)();

// router.post('/', countercontroller.create);
router.get('/', _Counter2.default.show);
router.put('/', _Counter2.default.update);

exports. default = router;
