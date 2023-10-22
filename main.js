const enterytime = parseInt(prompt('Please Enter the Reminder Time :'))

if(!isNaN(enterytime)) {

  let timereminder = enterytime

  function reminder() {
    if(timereminder>0) {
      console.log(`${timereminder} Seconds Left`)
      timereminder -= 1
      setTimeout(reminder, 1000)
    } else {
            console.log('Time is Up')
    }
    }  
} else {
    alert('Please Enter a number between 1 - 1000')
}

reminder();