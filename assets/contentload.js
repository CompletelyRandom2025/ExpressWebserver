response2="temp";
(async () => {
	await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random").then(async Response => response2=Response);
    response2 = await response2.json();
    console.log(response2.text);
    const paragraph = document.createElement('p');
    paragraph.textContent = response2.text;
    const content = document.getElementById('jscontent');
    content.appendChild(paragraph);
})();