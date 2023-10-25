const lockerDisplay = document.getElementById("lockers");

function getNextAvailableLockerIndex(lockers) {
  for (let i = 0; i < lockers.length; i++) {
    if (lockers[i].classList.contains("free")) {
      return i;
    }
  }
  return -1;
}

function reserveLocker() {
  const lockers = lockerDisplay.getElementsByClassName("locker");
  const lastReservedIndex = 0;

  let nextLockerIndex = -1;

  for (let i = lastReservedIndex; i < lockers.length; i += 2) {
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
  } else {
    return alert(
      "Sorry! All the lockers are busy now. Please wait for a moment!"
    );
  }
}

const reserveButton = document.getElementById("reserve");

reserveButton.addEventListener("click", reserveLocker);
