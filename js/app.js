async function gql(query, variables={}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "Peeje") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.user.publication.posts;
        let containerArray = []
        let container = '';
        
        articles.forEach((article) => {
            let photo = document.createElement('img');
            photo.src = article.coverImage;


            let title = document.createElement('h4');
            title.innerText = article.title;

            let brief = document.createElement('p');
            brief.innerText = article.brief;

            let link = document.createElement('a');
            link.innerText = 'Read more...';
            link.target = '_blank';
            link.href = `https://peterjon.hashnode.dev/${article.slug}`;

             container = document.createElement('div');

            // container.appendChild(title).appendChild(brief).appendChild(link);
            
            container.appendChild(photo);
            container.appendChild(title);
            container.appendChild(brief);
            container.appendChild(link);
            containerArray.push(container);
            console.log(article.slug);


            //containerArray[index].push({title, brief, link});
            
        })
       
         //console.log(containerArray);
        document.querySelector('.test-blog').appendChild(containerArray[0]);
         containerArray[1] ? document.querySelector('.test-blog2').appendChild(containerArray[1]) 
         : document.getElementById('testerDiv1').style.display = "none";
         document.querySelector('.test-blog3').appendChild(containerArray[2]);     


           
});

// document.getElementById('blog').appendChild('articles');


// document.getElementById('articles').parentNode.innerHTML = `
// <div class="app">
//     <h1 class="app-heading">Catalin Pit's Articles</h1>
// </div>`;