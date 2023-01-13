const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target);
         
console.log(tabContents)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qual1_active')
        })
        target.classList.add('qual1_active')
        // tabs.forEach(tab => {
        //     tab.classList.remove('qual1_active')
        // })
        // tab.classList.add('qual1_active')
    })
})