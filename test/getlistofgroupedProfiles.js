const list = [
  { drayosCarrier: a, moveId: 1 },
  { drayosCarrier: a, moveId: 2 },
  { drayosCarrier: b, moveId: 3 },
  { drayosCarrier: a, moveId: 4 },
  { drayosCarrier: c, moveId: 5 },
  { drayosCarrier: b, moveId: 6 },
  { drayosCarrier: b, moveId: 7 },
];
here in this list i want this

I want to get the a list of same drayosCarrier occurs in sequence
but when does not occur in sequence it should give list but with only that Object

something like this: 
[
  [{ drayosCarrier: a, moveId: 1 },
  { drayosCarrier: a, moveId: 2 },],
  [{ drayosCarrier: b, moveId: 3 },],
  [{ drayosCarrier: a, moveId: 4 },],
  [{ drayosCarrier: c, moveId: 5 },],
  [{ drayosCarrier: b, moveId: 6 },
  { drayosCarrier: b, moveId: 7 },]
]