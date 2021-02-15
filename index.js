document.querySelectorAll('.one').forEach(function(tabs){
    tabs.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelector('.one').classList.add('two');
    });
  });