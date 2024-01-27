Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const now = new Date();
    const hhmmss=now.toTimeString().slice(0,8);
    const hhmmssAmPm = now.toLocaleTimeString('en-IN , (hour12:true));
    console.log('24-Hour Format: ${hhmmss}');
    console.log('12-Hour Format: ${hhmmssAmPm}');
}
setInterval(updateClock,1000);
updateClock(0);