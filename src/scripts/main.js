AOS.init();

const dateEvent = new Date("Dec 12, 2024 19:00:00");
const timeStampEvent = dateEvent.getTime();

const counterTime = setInterval(function () {
  const time = new Date();
  const timeStempCurrent = time.getTime();

  const distanceToEvent = timeStampEvent - timeStempCurrent;

  const dayToMs = 1000 * 60 * 60 * 24;
  const hoursToMs = 1000 * 60 * 60;
  const minToMs = 1000 * 60;

  const dayOfEvent = Math.floor(distanceToEvent / dayToMs);
  const hoursOfEvent = Math.floor((distanceToEvent % dayToMs) / hoursToMs);
  const minutesOfEvent = Math.floor((distanceToEvent % hoursToMs) / minToMs);
  const secondsOfEvent = Math.floor((distanceToEvent % minToMs) / 1000);

  document.getElementById(
    "counterTime"
  ).innerHTML = `${dayOfEvent}d ${hoursOfEvent}h ${minutesOfEvent}m ${secondsOfEvent}s`;

  if (distanceToEvent < 0) {
    clearInterval(counterTime);
    document.getElementById("counterTime").innerHTML = "Evento expirado";
  }
}, 1000);
