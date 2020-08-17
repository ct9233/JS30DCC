const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck() {
    let inBetween = false;
    // Check if Shift key down
    // AND check if box is being checked
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        })
    }
    
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('
    click', handleCheck));