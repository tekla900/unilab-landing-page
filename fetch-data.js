async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/posts/';
    try {
      let res = await fetch(url);
      return await res.json()
    } catch (error) {
      console.log(error)
    }
}  

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    for (let each = 0; each <= 8; each ++) {
        let htmlRender =  `
        <div class='api-user review'>
          <h2 class='api-title'>${users[each].title}</h2>
          <h2 class='api-title'>${users[each].id}</h2>
          <p class='api-p'>${users[each].body}</p>
        </div>
      `;
      html += htmlRender;
    }
    let wrapper = document.querySelector('.users');
    wrapper.innerHTML = html;
  }
  
  renderUsers();
  