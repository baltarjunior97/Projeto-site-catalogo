"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Car = require('../controllers/Car'); var _Car2 = _interopRequireDefault(_Car);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired); // eslint-disable-line

const router = new (0, _express.Router)();

router.get('/', _Car2.default.index);
router.get('/:id', _Car2.default.show);
router.post('/', _loginRequired2.default, _Car2.default.create);
router.put('/:id', _loginRequired2.default, _Car2.default.update);
router.delete('/:id', _loginRequired2.default, _Car2.default.delete);

exports. default = router;
