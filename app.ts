// Define Search Topic From Search Bar
const searchTopic = document.getElementById('searchTopic')

const searchSubmit = document.querySelector('#searchSubmit')   

searchTopic.addEventListener('submit', (e) => {
    const searchText = e.target.value;
    // Search input event listener

    if(searchText !== ''){
        
        searchSubmit.addEventListener('click', (e) => {
            //Make httpcall
            facebook.getTopic(searchText)
            .then(data => {
                console.log(searchText);
            })
        });
    }
    e.preventDefault();
});

