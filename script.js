const lockerDisplay = document.getElementById("lockers");
const reserveButton = document.getElementById("reserve");

reserveButton.addEventListener("click", reserveLocker);

function reserveLocker() {
  const lockers = lockerDisplay.getElementsByClassName("locker");
  const lastReservedIndex = getLastReservedLockerIndex(lockers);

  let nextLockerIndex = -1;

  for (let i = lastReservedIndex + 2; i < lockers.length; i += 2) {
    if (lockers[i].classList.contains("free")) {
      nextLockerIndex = i;
      break;
    }
  }

  if (nextLockerIndex === -1) {
    nextLockerIndex = getNextAvailableLockerIndex(lockers);
  }

  if (nextLockerIndex !== -1) {
    lockers[nextLockerIndex].classList.remove("free");
    lockers[nextLockerIndex].classList.add("busy");
    lockers[nextLockerIndex].textContent = `#${nextLockerIndex + 1} is busy`;
  }
}

function getLastReservedLockerIndex(lockers) {
  for (let i = lockers.length - 1; i >= 0; i--) {
    if (lockers[i].classList.contains("busy")) {
      return i;
    }
  }

  return -1;
}

function getNextAvailableLockerIndex(lockers) {
  for (let i = 0; i < lockers.length; i++) {
    if (lockers[i].classList.contains("free")) {
      return i;
    }
  }

  return -1;
}
