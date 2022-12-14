"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[3];
console.log(colorName);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 0] = "Red";
    Color3[Color3["Green"] = 5] = "Green";
    Color3[Color3["Blue"] = 8] = "Blue";
})(Color3 || (Color3 = {}));
; //can assign values to all
var colorIndex2 = Color3["Blue"];
var colorIndex3 = Color3["Red"];
console.log(colorIndex2);
console.log(colorIndex3);
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 0] = "Red";
    Color4[Color4["Green"] = 1] = "Green";
    Color4[Color4["Blue"] = 1] = "Blue";
})(Color4 || (Color4 = {}));
;
var colorIndex4 = Color4["Blue"];
var colorIndex5 = Color4["Green"];
console.log(colorIndex4);
console.log(colorIndex5);
