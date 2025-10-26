"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var timerElement = document.getElementById("timer");
var timerInterval;
function startTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  var start = prompt("Введіть час у форматі 00:00");
  if (!start || !start.includes(":")) {
    alert("Невірний формат!");
    return;
  }
  var _start$split$map = start.split(":").map(Number),
    _start$split$map2 = _slicedToArray(_start$split$map, 2),
    min = _start$split$map2[0],
    sec = _start$split$map2[1];
  if (isNaN(min) || isNaN(sec) || min < 0 || sec < 0 || sec > 59) {
    alert("Невірне числове значення!");
    return;
  }
  var totalSeconds = min * 60 + sec;
  updateTimerDisplay(totalSeconds);
  timerInterval = setInterval(function () {
    totalSeconds = tick(totalSeconds);
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Час вийшов! 🔔";
    }
  }, 1000);
}
function updateTimerDisplay(totalSeconds) {
  var m = Math.floor(totalSeconds / 60);
  var s = totalSeconds % 60;
  timerElement.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}
function tick(currentSeconds) {
  if (currentSeconds > 0) {
    currentSeconds--;
    updateTimerDisplay(currentSeconds);
  }
  return currentSeconds;
}