const body = document.querySelector('body')

/* ===== FEATURE: Option to add shortcut for Desktop users ===== */
const add_button = document.createElement('button')
add_button.innerText = "Add to desktop"
add_button.classList.add('add_to_desktop')



window.addEventListener('beforeinstallprompt', (e1) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e1.preventDefault();
    // Stash the event so it can be triggered later.
    let deferred_prompt = e;
    // Update UI to notify the user they can add to home screen
    body.appendChild(add_button)
  
    add_button.addEventListener('click', (e2) => {
      // hide our user interface that shows our A2HS button
      add_button.style.display = 'none';
      // Show the prompt
      deferred_prompt.prompt();
      // Wait for the user to respond to the prompt
      deferred_prompt.userChoice.then((choice_result) => {
          if (choice_result.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferred_prompt = null;
        });
    });
  });

