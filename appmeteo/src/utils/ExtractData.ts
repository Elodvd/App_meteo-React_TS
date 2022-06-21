export interface Daily {
  humidity?: number;
  temp: {
    day?: number;
  };
}

export interface Data {
  daily: Daily[];
}

export function ExtractTemps(data: Data) {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(data.daily[i].temp.day);
  }
  return array;
}

export function ExtractHum(data: Data) {
  let array = [];
  for (let i = 0; i < 5; i++) {
    array.push(data.daily[i].humidity);
  }

  return array;
}
