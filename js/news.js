var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=ph&' +
          'apiKey=2c3a31bcf59b4bf987f0453e5ff9db7d';
		var req = new Request(url);
		fetch(req)
      .then((res) => res.json())
      .then((data) => {
      	let output = '';
      	let i = 0;
        data.articles.forEach(function(article){
        	if(i == 3)
        	{
        		return;
        	}
         	output += `
         		<div>
         			<img src="${article.urlToImage}">
         			<h3>${article.title}</h3>
         			<p>${article.description}</p>
         			<a href="${article.url}">read more</a>
         		</div>
         	`;
         	i++;
        });
        document.getElementById('news').innerHTML = output;
      })