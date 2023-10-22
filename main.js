const entryTime = parseInt(prompt('Please Enter the Reminder Time:'));

if (!isNaN(entryTime)) {
  let timeReminder = entryTime;

  const reminder = () => {
    if (timeReminder > 0) {
      console.log(`${timeReminder} Seconds Left`);
      timeReminder -= 1;
      setTimeout(reminder, 1000);
    } else {
      console.log('Time is Up');
    }
  };

  reminder();
} else {
  alert('Please Enter a number between 1 - 1000');
}

